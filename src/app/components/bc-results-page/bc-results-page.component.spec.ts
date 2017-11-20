import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcResultsPageComponent } from './bc-results-page.component';

describe('BcResultsPageComponent', () => {
  let component: BcResultsPageComponent;
  let fixture: ComponentFixture<BcResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcResultsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
