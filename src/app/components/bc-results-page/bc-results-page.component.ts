import { Component, OnInit, Input } from '@angular/core';
import { ComputeService } from './../../services/compute.service';

@Component({
  selector: 'app-bc-results-page',
  templateUrl: './bc-results-page.component.html',
  styleUrls: ['./bc-results-page.component.scss']
})
export class BcResultsPageComponent implements OnInit {

  public index = 0;
  public _active = false;

  constructor(private computeService: ComputeService) { }

  ngOnInit() {
  }

  get active(): boolean {
    return this._active;
  }
  @Input()
  set active(value: boolean) {
    this._active = value;
    if (this._active) {
      this.computeService.runBaseCase('qalys', 'costs_hc');
    }
  }

}
