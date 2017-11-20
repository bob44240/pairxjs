import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomesResultsPageComponent } from './outcomes-results-page.component';

describe('OutcomesResultsPageComponent', () => {
  let component: OutcomesResultsPageComponent;
  let fixture: ComponentFixture<OutcomesResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcomesResultsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomesResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
