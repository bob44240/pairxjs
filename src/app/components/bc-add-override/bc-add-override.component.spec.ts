import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcAddOverrideComponent } from './bc-add-override.component';

describe('BcAddOverrideComponent', () => {
  let component: BcAddOverrideComponent;
  let fixture: ComponentFixture<BcAddOverrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcAddOverrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcAddOverrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
