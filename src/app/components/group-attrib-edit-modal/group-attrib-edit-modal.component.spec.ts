import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAttribEditModalComponent } from './group-attrib-edit-modal.component';

describe('GroupAttribEditModalComponent', () => {
  let component: GroupAttribEditModalComponent;
  let fixture: ComponentFixture<GroupAttribEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupAttribEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAttribEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
