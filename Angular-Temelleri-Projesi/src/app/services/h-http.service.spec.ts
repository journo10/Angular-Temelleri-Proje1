import { TestBed } from '@angular/core/testing';

import { HHttpService } from './h-http.service';

describe('HHttpService', () => {
  let service: HHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
