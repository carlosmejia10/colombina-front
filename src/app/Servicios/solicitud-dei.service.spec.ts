import { TestBed } from '@angular/core/testing';

import { SolicitudDEIService } from './solicitud-dei.service';

describe('SolicitudDEIService', () => {
  let service: SolicitudDEIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudDEIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
