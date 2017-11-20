import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesHealthPageComponent } from './values-health-page.component';

describe('ValuesHealthPageComponent', () => {
  let component: ValuesHealthPageComponent;
  let fixture: ComponentFixture<ValuesHealthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesHealthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesHealthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
