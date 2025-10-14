import { TestBed } from '@angular/core/testing';

import { LogserviceSvc } from './logservice.svc';

describe('LogserviceSvc', () => {
  let service: LogserviceSvc;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogserviceSvc);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
