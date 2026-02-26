import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseEngineTs } from './exercise-engine.ts';

describe('ExerciseEngineTs', () => {
  let component: ExerciseEngineTs;
  let fixture: ComponentFixture<ExerciseEngineTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseEngineTs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseEngineTs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
