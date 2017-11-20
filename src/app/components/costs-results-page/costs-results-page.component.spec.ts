import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostsResultsPageComponent } from './costs-results-page.component';

describe('CostsResultsPageComponent', () => {
  let component: CostsResultsPageComponent;
  let fixture: ComponentFixture<CostsResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostsResultsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostsResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
