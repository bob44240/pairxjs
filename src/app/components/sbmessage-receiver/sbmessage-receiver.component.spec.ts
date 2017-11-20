import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbmessageReceiverComponent } from './sbmessage-receiver.component';

describe('SbmessageReceiverComponent', () => {
  let component: SbmessageReceiverComponent;
  let fixture: ComponentFixture<SbmessageReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbmessageReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbmessageReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
