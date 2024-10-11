import { TestBed } from '@angular/core/testing';

import { DocumentoServiceService } from './documento-regulatorio.service';

describe('DocumentoServiceService', () => {
  let service: DocumentoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
