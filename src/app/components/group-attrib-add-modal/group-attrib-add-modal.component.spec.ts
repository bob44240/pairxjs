import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAttribAddModalComponent } from './group-attrib-add-modal.component';

describe('GroupAttribAddModalComponent', () => {
  let component: GroupAttribAddModalComponent;
  let fixture: ComponentFixture<GroupAttribAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupAttribAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAttribAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
