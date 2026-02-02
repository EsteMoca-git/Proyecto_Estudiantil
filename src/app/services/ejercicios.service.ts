import { Injectable } from '@angular/core';
import { CompletarEjercicio } from '../models/completar';
import { GramarTopic } from '../models/gramar-topic.model';

@Injectable({
  providedIn: 'root',
})
export class EjerciciosService {
  private gramarTopic : GramarTopic[] = []

  private completarEjercicios: CompletarEjercicio[] = [ 
    {
    sentence: 'I ____ a student.',
    correctAnswer: 'am'
  },
  {
    sentence: 'She ____ my sister.',
    correctAnswer: 'is'
  },
  {
    sentence: 'They ____ friends',
    correctAnswer: 'are'
  }
]

getCompletarEjercicios(): CompletarEjercicio[] {
  return this.completarEjercicios;
}

}
