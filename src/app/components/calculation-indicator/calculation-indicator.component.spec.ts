import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationIndicatorComponent } from './calculation-indicator.component';

describe('CalculationIndicatorComponent', () => {
  let component: CalculationIndicatorComponent;
  let fixture: ComponentFixture<CalculationIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
