import { TestBed } from '@angular/core/testing';

import { TrackingInfoService } from './tracking-info.service';

describe('TrackingInfoService', () => {
  let service: TrackingInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackingInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
