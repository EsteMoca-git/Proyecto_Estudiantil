import { Component } from '@angular/core';

@Component({
  selector: 'app-to-be',
  standalone: true,
  imports: [],
  templateUrl: './to-be.html',
  styleUrl: './to-be.css',
})
export class ToBe {
  conjugaciones = [
    { pronoun: 'I', verb: 'am' },
    { pronoun: 'You', verb: 'are' },
    { pronoun: 'He', verb: 'is' },
    { pronoun: 'She', verb: 'is' },
    { pronoun: 'It', verb: 'is' },
    { pronoun: 'We', verb: 'are' },
    { pronoun: 'They', verb: 'are' },
  ];
}
