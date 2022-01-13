import { TestBed } from '@angular/core/testing';

import { ClienteAccidenteService } from './cliente-accidente.service';

describe('ClienteAccidenteService', () => {
  let service: ClienteAccidenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteAccidenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
