import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsSidebarComponent } from './results-sidebar.component';

describe('ResultsSidebarComponent', () => {
  let component: ResultsSidebarComponent;
  let fixture: ComponentFixture<ResultsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
