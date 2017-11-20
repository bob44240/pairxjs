import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesPageComponent } from './variables-page.component';

describe('VariablesPageComponent', () => {
  let component: VariablesPageComponent;
  let fixture: ComponentFixture<VariablesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
