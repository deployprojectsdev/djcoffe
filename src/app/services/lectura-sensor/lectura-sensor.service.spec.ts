import { TestBed } from '@angular/core/testing';

import { LecturaSensorService } from './lectura-sensor.service';

describe('LecturaSensorService', () => {
  let service: LecturaSensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LecturaSensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
