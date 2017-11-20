import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizSettingPageComponent } from './wiz-setting-page.component';

describe('WizSettingPageComponent', () => {
  let component: WizSettingPageComponent;
  let fixture: ComponentFixture<WizSettingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizSettingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizSettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
