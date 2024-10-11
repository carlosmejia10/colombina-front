import { TestBed } from '@angular/core/testing';

import { AsuntosRegulatoriosService } from './asuntos-regulatorios.service';

describe('AsuntosRegulatoriosService', () => {
  let service: AsuntosRegulatoriosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsuntosRegulatoriosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
