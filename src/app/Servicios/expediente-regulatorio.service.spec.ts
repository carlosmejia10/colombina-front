import { TestBed } from '@angular/core/testing';

import { ExpedienteRegulatorioService } from './expediente-regulatorio.service';

describe('ExpedienteRegulatorioService', () => {
  let service: ExpedienteRegulatorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpedienteRegulatorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
