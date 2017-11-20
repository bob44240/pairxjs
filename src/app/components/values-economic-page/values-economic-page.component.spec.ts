import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesEconomicPageComponent } from './values-economic-page.component';

describe('ValuesEconomicPageComponent', () => {
  let component: ValuesEconomicPageComponent;
  let fixture: ComponentFixture<ValuesEconomicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesEconomicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesEconomicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
