import { TestBed, inject } from '@angular/core/testing';

import { GlobalDataAccessService } from './global-data-access.service';

describe('GlobalDataAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalDataAccessService]
    });
  });

  it('should be created', inject([GlobalDataAccessService], (service: GlobalDataAccessService) => {
    expect(service).toBeTruthy();
  }));
});
