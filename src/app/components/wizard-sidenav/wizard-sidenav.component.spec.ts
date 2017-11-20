import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardSidenavComponent } from './wizard-sidenav.component';

describe('WizardSidenavComponent', () => {
  let component: WizardSidenavComponent;
  let fixture: ComponentFixture<WizardSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
