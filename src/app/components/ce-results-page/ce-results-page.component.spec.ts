import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeResultsPageComponent } from './ce-results-page.component';

describe('CeResultsPageComponent', () => {
  let component: CeResultsPageComponent;
  let fixture: ComponentFixture<CeResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeResultsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
