import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionPageComponent } from './decision-page.component';

describe('DecisionPageComponent', () => {
  let component: DecisionPageComponent;
  let fixture: ComponentFixture<DecisionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
