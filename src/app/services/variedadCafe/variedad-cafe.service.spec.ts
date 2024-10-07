import { TestBed } from '@angular/core/testing';

import { VariedadCafeService } from './variedad-cafe.service';

describe('VariedadCafeService', () => {
  let service: VariedadCafeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariedadCafeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
