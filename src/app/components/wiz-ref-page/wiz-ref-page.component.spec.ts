import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizRefPageComponent } from './wiz-ref-page.component';

describe('WizRefPageComponent', () => {
  let component: WizRefPageComponent;
  let fixture: ComponentFixture<WizRefPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizRefPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizRefPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
