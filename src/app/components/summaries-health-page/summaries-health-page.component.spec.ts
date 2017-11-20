import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummariesHealthPageComponent } from './summaries-health-page.component';

describe('SummariesHealthPageComponent', () => {
  let component: SummariesHealthPageComponent;
  let fixture: ComponentFixture<SummariesHealthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummariesHealthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummariesHealthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
