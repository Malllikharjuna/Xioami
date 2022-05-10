import { TestBed } from '@angular/core/testing';

import { RealserviceService } from './realservice.service';

describe('RealserviceService', () => {
  let service: RealserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
