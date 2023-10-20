import { TestBed } from '@angular/core/testing';

import { ConsummerService } from './consummer.service';

describe('ConsummerService', () => {
  let service: ConsummerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsummerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
