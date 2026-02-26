import { TestBed } from '@angular/core/testing';

import { InglesDesdeCero } from './ingles-desde-cero';

describe('InglesDesdeCero', () => {
  let service: InglesDesdeCero;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InglesDesdeCero);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
