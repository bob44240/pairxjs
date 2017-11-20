import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesEconomicPageComponent } from './summaries-economic-page.component';

describe('SummariesEconomicPageComponent', () => {
  let component: SummariesEconomicPageComponent;
  let fixture: ComponentFixture<SummariesEconomicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummariesEconomicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesEconomicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
