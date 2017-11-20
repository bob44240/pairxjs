import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceResultsPageComponent } from './trace-results-page.component';

describe('TraceResultsPageComponent', () => {
  let component: TraceResultsPageComponent;
  let fixture: ComponentFixture<TraceResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceResultsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
