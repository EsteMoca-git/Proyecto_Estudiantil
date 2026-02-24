import { TestBed } from '@angular/core/testing';

import { ExerciseEngineService } from './exercise-engine.service';

describe('ExerciseEngineService', () => {
  let service: ExerciseEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
