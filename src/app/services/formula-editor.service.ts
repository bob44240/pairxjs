import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { FormulaTicket } from './../classes/formula-ticket';
import { FormulaProvider } from './../classes/formula-provider';

@Injectable()
export class FormulaEditorService {

  private tickets: FormulaTicket[] = [];
  private providers: FormulaProvider[] = [];

  constructor() { }

  addTicket(name: string, value: string): Subject<string> {
    const subj = <Subject<string>> new Subject();
    let myTicket = this.findTicket(name);
    if (myTicket) {
      myTicket.subject.complete();
      myTicket.subject = subj;
      myTicket.value = value;
    } else {
      myTicket = new FormulaTicket(name, value, subj)
      this.tickets.push(myTicket);
    }
    const provider = this.findProvider(name);
    if (provider) {
      provider.callback(myTicket);
    }
    return subj;
  }

  removeTicket(name: string): void {
    this.tickets = this.tickets.filter(ticket => ticket.name === name);
  }

  findTicket(name: string): FormulaTicket {

    const matches = this.tickets.filter(ticket => ticket.name === name);
    let ret = null;
    if (matches.length > 0) {
      ret = matches[0];
    }
    return ret;
  }

  addProvider(name: string, callback: (FormulaTicket) => void): FormulaTicket {
    const myProvider = this.findProvider(name);
    if (myProvider) {
      myProvider.callback = callback;
    } else {
      this.providers.push(new FormulaProvider(name, callback));
    }
    return this.findTicket(name);
  }

  removeProvider(name: string): void {
    this.providers = this.providers.filter(provider => provider.name === name);
  }

  findProvider(name: string): FormulaProvider {

    const matches = this.providers.filter(provider => provider.name === name);
    let ret = null;
    if (matches.length > 0) {
      ret = matches[0];
    }
    return ret;

  }

}
