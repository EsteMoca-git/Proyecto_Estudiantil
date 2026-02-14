import { Injectable } from '@angular/core';
import { Execercise } from '../../models/excercises';

@Injectable({
  providedIn: 'root',
})
export class ExerciseEngineService {
  evaluate(
    excercise : Execercise,
    userAnswer : string): boolean{
      return (
        userAnswer.trim().toLowerCase() ===
        excercise.correctAnswer.trim().toLowerCase()
      );
  }
}
