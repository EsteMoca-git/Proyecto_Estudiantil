import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  imports: [],
  templateUrl: './numeros.html',
  styleUrl: './numeros.css',
})
export class Numeros {
    numbers = [
  // 1 - 10
  { value: 1, word: 'One' },
  { value: 2, word: 'Two' },
  { value: 3, word: 'Three' },
  { value: 4, word: 'Four' },
  { value: 5, word: 'Five' },
  { value: 6, word: 'Six' },
  { value: 7, word: 'Seven' },
  { value: 8, word: 'Eight' },
  { value: 9, word: 'Nine' },
  { value: 10, word: 'Ten' },

  // Decenas (20–100)
  { value: 20, word: 'Twenty' },
  { value: 30, word: 'Thirty' },
  { value: 40, word: 'Forty' },
  { value: 50, word: 'Fifty' },
  { value: 60, word: 'Sixty' },
  { value: 70, word: 'Seventy' },
  { value: 80, word: 'Eighty' },
  { value: 90, word: 'Ninety' },
  { value: 100, word: 'One Hundred' },

  // Centenas (200–1000)
  { value: 200, word: 'Two Hundred' },
  { value: 300, word: 'Three Hundred' },
  { value: 400, word: 'Four Hundred' },
  { value: 500, word: 'Five Hundred' },
  { value: 600, word: 'Six Hundred' },
  { value: 700, word: 'Seven Hundred' },
  { value: 800, word: 'Eight Hundred' },
  { value: 900, word: 'Nine Hundred' },
  { value: 1000, word: 'One Thousand' },

  // Miles (2000–10000)
  { value: 2000, word: 'Two Thousand' },
  { value: 3000, word: 'Three Thousand' },
  { value: 4000, word: 'Four Thousand' },
  { value: 5000, word: 'Five Thousand' },
  { value: 6000, word: 'Six Thousand' },
  { value: 7000, word: 'Seven Thousand' },
  { value: 8000, word: 'Eight Thousand' },
  { value: 9000, word: 'Nine Thousand' },
  { value: 10000, word: 'Ten Thousand' },

  // Cientos de miles (200000–900000)
  { value: 200000, word: 'Two Hundred Thousand' },
  { value: 300000, word: 'Three Hundred Thousand' },
  { value: 400000, word: 'Four Hundred Thousand' },
  { value: 500000, word: 'Five Hundred Thousand' },
  { value: 600000, word: 'Six Hundred Thousand' },
  { value: 700000, word: 'Seven Hundred Thousand' },
  { value: 800000, word: 'Eight Hundred Thousand' },
  { value: 900000, word: 'Nine Hundred Thousand' },

  // Millón
  { value: 1000000, word: 'One Million' }
];

}
