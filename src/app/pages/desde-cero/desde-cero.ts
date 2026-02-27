import { Component } from '@angular/core';
import { InglesDesdeCero } from '../../services/inglesDesdeCero/ingles-desde-cero';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DesdeCeroModel } from '../../models/InglesDesdeCero/inglesDesdeCero';

@Component({
  selector: 'app-desde-cero',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './desde-cero.html',
  styleUrl: './desde-cero.css',
})
export class DesdeCero {
  sections : DesdeCeroModel[]= []
    
  
    constructor(public inglesDesdeCeroService : InglesDesdeCero){}
  
  ngOnInit(): void {
    this.inglesDesdeCeroService.getDesdeCeroSections().subscribe(data => {
      this.sections = data;
    });
  
  }
  
}
