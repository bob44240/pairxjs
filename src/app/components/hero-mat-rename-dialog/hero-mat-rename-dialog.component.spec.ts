import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMatRenameDialogComponent } from './hero-mat-rename-dialog.component';

describe('HeroMatRenameDialogComponent', () => {
  let component: HeroMatRenameDialogComponent;
  let fixture: ComponentFixture<HeroMatRenameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroMatRenameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMatRenameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
