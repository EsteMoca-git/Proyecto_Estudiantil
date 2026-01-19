import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-completar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './completar.html',
  styleUrls: ['./completar.css'],
})
export class Completar {

  userAnswer = '';
  conrrectAnswer = 'am';
  result: 'correct' | 'incorrect' | null = null;

  checkAnswer(): void {
    this.result = this.userAnswer.trim().toLowerCase() === this.conrrectAnswer? 'correct' : 'incorrect';
  }
}
