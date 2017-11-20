import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcOverrideValuesComponent } from './bc-override-values.component';

describe('BcOverrideValuesComponent', () => {
  let component: BcOverrideValuesComponent;
  let fixture: ComponentFixture<BcOverrideValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcOverrideValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcOverrideValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
