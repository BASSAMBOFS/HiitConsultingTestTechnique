import { TestBed } from '@angular/core/testing';

import { ShortnerAPIService } from './shortner-api.service';

describe('ShortnerAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShortnerAPIService = TestBed.get(ShortnerAPIService);
    expect(service).toBeTruthy();
  });
});
