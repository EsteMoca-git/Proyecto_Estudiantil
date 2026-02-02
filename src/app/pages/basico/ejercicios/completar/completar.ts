import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EjerciciosService } from '../../../../services/ejercicios.service';
import { CompletarEjercicio } from '../../../../models/completar';

@Component({
  selector: 'app-completar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './completar.html',
  styleUrls: ['./completar.css'],
})
export class Completar implements OnInit {
  ejercicios: CompletarEjercicio[] = []
  currentExercise! : CompletarEjercicio
  currentIndex : number = 0;
  

  userAnswer: string = '';
  result: 'correct' | 'incorrect' | null = null;

  constructor(private ejerciciosService : EjerciciosService){}

  ngOnInit(): void {
    this.ejercicios = this.ejerciciosService.getCompletarEjercicios();
    this.loadExercise()
  }

  loadExercise(): void{
    this.currentExercise = this.ejercicios[this.currentIndex];
    this.userAnswer = '';
    this.result = null
  }

  checkAnswer(): void {
    const user = this.userAnswer.trim().toLowerCase()
    const correct = this.currentExercise.correctAnswer.toLocaleLowerCase();
    

    this.result = user === correct ?  'correct' : 'incorrect'
    
  }

  nextExercise(): void {
    if(this.currentIndex < this.ejercicios.length -1){
      this.currentIndex++;
      this.loadExercise();
    }
  }
}
