import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompletarEjercicio } from '../../../../models/completar';
import { ActivatedRoute } from '@angular/router';
import { EjerciciosService } from '../../../../services/basico/ejercicios.service';

@Component({
  selector: 'app-completar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './completar.html',
  styleUrls: ['./completar.css'],
})
export class Completar implements OnInit {
  ejercicios: CompletarEjercicio[] = []
  currentExercise? : CompletarEjercicio
  currentIndex : number = 0;
  

  userAnswer: string = '';
  result: 'correct' | 'incorrect' | null = null;

  constructor(
    private route : ActivatedRoute,
    private ejerciciosService : EjerciciosService){}

  ngOnInit(): void {
    
    const temaId = this.route.snapshot.paramMap.get('tema')

    if(!temaId){
      console.error('No viene tema en la ruta!');
      return;
    }
    console.log('temaId desde la ruta:', temaId);
    console.log('topics disponibles:', this.ejerciciosService);
    console.log(this.ejercicios);
    console.log('Ejercicio actual:', this.currentExercise);



    const topic = this.ejerciciosService.getExerciseByTopicId(temaId);

    if(!topic){
      console.log('Tema no encontrado!');
      return;
    }
    
    this.ejercicios = topic.exercises;
    this.loadExercise()
    console.log('Topic encontrado:', topic);
    console.log('Exercises del topic:', topic?.exercises);  
  }

  



  loadExercise(): void{
    this.currentExercise = this.ejercicios[this.currentIndex];
    this.userAnswer = '';
    this.result = null
    console.log('El ejercicio que está leyendo es: ', this.currentExercise)
  }

  checkAnswer(): void {
    if(!this.currentExercise) return;


    const user = this.userAnswer.trim().toLowerCase()
    const correct = this.currentExercise.correctAnswer.toLowerCase();
    

    this.result = user === correct ?  'correct' : 'incorrect'
    
  }

//Controlar el límite de oraciones con los botones   
  nextExercise(): void {
    if(this.currentIndex < this.ejercicios.length -1){
      this.currentIndex++;
      this.loadExercise();
    }
  }
  beforeExercise(): void {
    if(this.currentIndex > 0){
      this.currentIndex--;
      this.loadExercise();
    }
  }
}
