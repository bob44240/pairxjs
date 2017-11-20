import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericModalDialogComponent } from './generic-modal-dialog.component';

describe('GenericModalDialogComponent', () => {
  let component: GenericModalDialogComponent;
  let fixture: ComponentFixture<GenericModalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericModalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
