import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionsPageComponent } from './transitions-page.component';

describe('TransitionsPageComponent', () => {
  let component: TransitionsPageComponent;
  let fixture: ComponentFixture<TransitionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
