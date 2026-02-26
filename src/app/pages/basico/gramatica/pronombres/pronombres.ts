import { Component } from '@angular/core';

@Component({
  selector: 'app-pronombres',
  standalone: true,
  imports: [],
  templateUrl: './pronombres.html',
  styleUrl: './pronombres.css',
})
export class Pronombres {
    pronombres = [
    { subject: 'I', meaning: 'Yo' },
    { subject: 'You', meaning: 'Tú / Usted' },
    { subject: 'He', meaning: 'Él' },
    { subject: 'She', meaning: 'Ella' },
    { subject: 'It', meaning: 'Eso / Ello' },
    { subject: 'We', meaning: 'Nosotros' },
    { subject: 'They', meaning: 'Ellos' },
  ];

}
