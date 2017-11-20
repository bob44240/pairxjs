import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMat2ModalDialogComponent } from './hero-mat2-modal-dialog.component';

describe('HeroMat2ModalDialogComponent', () => {
  let component: HeroMat2ModalDialogComponent;
  let fixture: ComponentFixture<HeroMat2ModalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroMat2ModalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMat2ModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
