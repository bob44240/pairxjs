import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandstableComponent } from './handstable.component';

describe('HandstableComponent', () => {
  let component: HandstableComponent;
  let fixture: ComponentFixture<HandstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
