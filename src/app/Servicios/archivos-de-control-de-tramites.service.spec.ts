import { TestBed } from '@angular/core/testing';

import { ArchivosDeControlDeTramitesService } from './archivos-de-control-de-tramites.service';

describe('ArchivosDeControlDeTramitesService', () => {
  let service: ArchivosDeControlDeTramitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivosDeControlDeTramitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
