import { TestBed } from '@angular/core/testing';

import { AvanzadoService } from './avanzado-service';

describe('AvanzadoService', () => {
  let service: AvanzadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvanzadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
