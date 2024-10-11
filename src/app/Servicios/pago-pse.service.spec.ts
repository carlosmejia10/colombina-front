import { TestBed } from '@angular/core/testing';

import { PagoPSEService } from './pago-pse.service';

describe('PagoPSEService', () => {
  let service: PagoPSEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoPSEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
