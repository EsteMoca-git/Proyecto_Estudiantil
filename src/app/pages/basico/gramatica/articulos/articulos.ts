import { Component } from '@angular/core';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [],
  templateUrl: './articulos.html',
  styleUrl: './articulos.css',
})
export class Articulos {
    articulos = [
  {
    word: "the",
    use: "Artículo definido. Se usa para referirse a algo específico o conocido por el hablante y el oyente."
  },
  {
    word: "a",
    use: "Artículo indefinido. Se usa con sustantivos contables en singular, cuando se habla de algo no específico o por primera vez."
  },
  {
    word: "an",
    use: "Artículo indefinido. Igual que 'a', pero se usa antes de palabras que comienzan con sonido vocálico."
  }

  ];
}
