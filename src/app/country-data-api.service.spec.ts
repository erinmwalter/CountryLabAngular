import { TestBed } from '@angular/core/testing';

import { CountryDataApiService } from './country-data-api.service';

describe('CountryDataApiService', () => {
  let service: CountryDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
