import { Component, AfterViewInit, OnInit, OnDestroy, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { getCurrentWord } from './../../functions/getCurrentWord';
import { completeWord } from './../../functions/completeWord';
import { removeLineBreaks } from './../../functions/removeLineBreaks';
import { ComputeService } from './../../services/compute.service';
import { LanguageService } from './../../services/language.service';
import { FormulaEditorService } from './../../services/formula-editor.service';
import { Observable } from 'rxjs/Rx';
import { FormulaTicket } from './../../classes/formula-ticket';
import { escapeRegex } from './../../functions/escapeRegex';

declare var ace: any;
declare var $: any;
declare var Window: any;

@Component({
  selector: 'app-formula-bar',
  templateUrl: './formula-bar.component.html',
  styleUrls: ['./formula-bar.component.scss']
})
export class FormulaBarComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('formulaBarElement') element: ElementRef;
  @Input() name: string;

  // Some dummy data to populate the autocomplete
  public vars = [];
  public active = 0;
  public ticket: FormulaTicket = null;
  public matches_to_show = [];
  public editor = null;
  public cursorPos = 0;
  public mode = {};
  public docHTML = '';

  private observer;

  constructor(private computeService: ComputeService,
              private languageService: LanguageService,
              private formulaEditorService: FormulaEditorService) {}

  ngOnInit() {
    this.vars = this.languageService.getNames();
    this.mode = this.languageService.getMode();

    this.languageService.namesEmitter.subscribe(names => {
      this.vars = names;
    });

    this.languageService.langEmitter.subscribe(lang => {
      this.mode = lang;
      this.updateVarNames();
    });

  }

  ngAfterViewInit() {

    // Initialize and configure the ace editor
    ace.config.set('basePath', '/src');
    this.editor = ace.edit(this.element.nativeElement);
    this.editor.renderer.setShowGutter(false);
    this.editor.getSession().setMode(this.mode);
    this.editor.$blockScrolling = Infinity;
    this.editor.commands.addCommand({
      name: 'golineup',
      bindKey: { win: 'Ctrl-Up', mac: 'Ctrl-Up' },
      exec: function (editor, args) { editor.navigateUp(args.times); },
      multiSelectAction: 'forEach',
      scrollIntoView: 'cursor',
      readOnly: true
    });
    this.editor.commands.addCommand({
      name: 'golinedown',
      bindKey: { win: 'Ctrl-Down', mac: 'Ctrl-Down' },
      exec: function (editor, args) { editor.navigateDown(args.times); },
      multiSelectAction: 'forEach',
      scrollIntoView: 'cursor',
      readOnly: true
    });
    this.editor.setOptions({
      fontSize: '11pt',
      printMargin: false
    });
    this.editor.setTheme('ace/theme/chrome');
    this.updateVarNames();

    // Checking current word in typeahead
    this.editor.getSession().on('change', e => {

      // Only do this for user-driven changes
      if (this.editor.curOp && this.editor.curOp.command.name) {
        this.populateSuggestions();
      } else {
        // Clear matches
        this.clearSuggestions();
      }
    });

    // Prevents the user from pasting in a line break
    this.editor.on('paste', function (e) {
      e.text = removeLineBreaks(e.text);
    });

    // Prevents the user from typing in a line break
    $(this.element.nativeElement).find('.ace_text-input').keydown(e => {

      // Enter was pressed without shift key
      if (e.keyCode === 27 && !e.shiftKey) {
        // prevent default behavior
        e.preventDefault();
        if (this.matches_to_show.length > 0) {
          this.clearSuggestions();
        } else {
          this.cancel();
        }
      }
    });

    // Prevents the user from typing in a line break
    $(this.element.nativeElement).find('.ace_text-input').keydown(e => {

      // Enter was pressed without shift key
      if (e.keyCode === 13 && !e.shiftKey) {
        // prevent default behavior
        e.preventDefault();
        if (this.matches_to_show.length > 0) {
          this.wordComplete(this.matches_to_show[this.active]);
        } else {
          this.submit();
        }
      }
    });

    // Prevents the user from typing in a line break
    $(this.element.nativeElement).find('.ace_text-input').keydown(e => {

      // Enter was pressed without shift key
      if (e.keyCode === 40 && !e.shiftKey) {
        // prevent default behavior
        if (this.matches_to_show.length === 0) {
          this.populateSuggestions();
        } else {
          this.active = Math.min(this.matches_to_show.length - 1, this.active + 1);
        }
      }

      // Enter was pressed without shift key
      if (e.keyCode === 38 && !e.shiftKey) {
        // prevent default behavior
        if (this.active === 0) {
          this.clearSuggestions();
        } else {
          this.active = Math.max(0, this.active - 1);
        }
      }
    });
    const callbackFn = function(ticket: FormulaTicket) {
      this.editFormula(ticket);
    }.bind(this);
    this.editFormula(this.formulaEditorService.addProvider(this.name, callbackFn));

  }

  ngOnDestroy() {
    this.editor.destroy();
  }

  wordComplete(text) {
    // Complete the word with the given suggestion
    completeWord(this.editor, text.name, this.cursorPos);

    // Refocus the input since focus will be lost due to the click
    $(this.element.nativeElement).find('.ace_text-input').focus();

    // Functions should also insert an open paren.  Only inserting
    // the open paren here because ace will add the other one and
    // make it so that the second paren will be automatically replaced
    // when typed over.
    if (text.fun) {
      this.editor.insert('(');
    }
    this.clearSuggestions();
  }

  updateVarNames() {

    this.editor.getSession().setMode(this.mode);
    this.editor.session.bgTokenizer.start(0);
  }

  clearSuggestions() {
    this.matches_to_show = [];
    this.docHTML = '';
    this.active = 0;
  }

  populateSuggestions() {

    // Capture the cursor position
    this.cursorPos = this.editor.selection.getCursor().column;

    this.active = 0;

    // Get the current word (i.e. whatever of the variable name or
    // function call that I have typed so far).
    const myword = getCurrentWord(this.editor),
          matchExpr = escapeRegex(myword.toLowerCase());

    // Don't bother with any suggestions if I haven't typed at least one char
    if (myword.length > 0) {

      // Get possible matches
      this.matches_to_show = this.vars.filter(x => {

        // Only doing matches from start, but case insensitive
        const the_match = x.name.toLowerCase().match('^' + matchExpr);
        let matched = false;
        if (the_match) {
            matched = true;
        }
        return matched;
      });
    } else {
      // Clear matches
      this.clearSuggestions();
    }
  }

  public editFormula(ticket: FormulaTicket): void {
    this.ticket = ticket;
    if (this.ticket) {
      this.editor.setReadOnly(false);
      setTimeout(() => this.editor.setValue(this.ticket.value), 10);
      $(this.element.nativeElement).find('.ace_text-input').focus();
    } else {
      this.editor.setValue('');
      this.editor.setReadOnly(true);
    }
  }

  public submit() {
    if (this.ticket) {
      this.ticket.subject.next(this.editor.getValue());
      this.formulaEditorService.removeTicket(this.ticket.name);
      this.ticket.subject.complete();
      this.editor.setValue('');
      this.editor.setReadOnly(true);
    }
  }

  public cancel() {
    if (this.ticket) {
      this.ticket.subject.next('abort');
      this.formulaEditorService.removeTicket(this.ticket.name);
      this.ticket.subject.complete();
      this.editor.setValue('');
      this.editor.setReadOnly(true);
    }
  }

  showDoc(pkg: string, fun: string) {
    this.clearSuggestions();
    this.computeService.getDocHTML(pkg, fun)
                       .subscribe(value => this.docHTML = value);
  }


}
