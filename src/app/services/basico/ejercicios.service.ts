import { Injectable } from '@angular/core';
import { CompletarEjercicio } from '../../models/completar';
import { GramarTopic } from '../../models/gramar-topic.model';



@Injectable({
  providedIn: 'root',
})
export class EjerciciosService {
  private gramarTopic : CompletarEjercicio[] = []

  private topics: GramarTopic[] = [ 
    {
      id: 'tobe',
      title: 'Verbo To Be',
      exercises: [
    
  {
    id: 1,
    sentence: 'I ____ a student.',
    correctAnswer: 'am',
    explanation: 'I siempre va con "AM"'

  },
  {
    id: 2,
    sentence: 'She ____ my sister.',
    correctAnswer: 'is',
    explanation: 'He, She, It --> "Is"'
  },
  {
    id: 3,
    sentence: 'They ____ friends',
    correctAnswer: 'are',
    explanation: 'We, You, They --> "ARE" '
  },
  { id: 4, sentence: 'He ____ a doctor.', 
  correctAnswer: 'is', 
  explanation: 'He --> "IS"' 
}, 
{ id: 5, 
  sentence: 'We ____ at school.', 
  correctAnswer: 'are', 
  explanation: 'We --> "ARE"' 
}, 
{ id: 6, 
  sentence: 'You ____ very kind.', 
  correctAnswer: 'are', 
  explanation: 'You --> "ARE"' 
}, 
{ id: 7, 
  sentence: 'It ____ a sunny day.', 
  correctAnswer: 'is', 
  explanation: 'It --> "IS"' 
}, 
{ id: 8, 
  sentence: 'My parents ____ at home.', 
  correctAnswer: 'are', 
  explanation: 'Plural subjects --> "ARE"' 
}, 
{ id: 9, 
  sentence: 'The cat ____ on the sofa.', 
  correctAnswer: 'is', 
  explanation: 'Singular subject (The cat) --> "IS"' 
}, 
{ id: 10, 
  sentence: 'We ____ ready for the exam.', 
  correctAnswer: 'are', 
  explanation: 'We --> "ARE"' 
}
  ]
    }
]

getExerciseByTopicId(topicId: string): GramarTopic | undefined {
  return this.topics.find(topic => topic.id === topicId);
}

}
