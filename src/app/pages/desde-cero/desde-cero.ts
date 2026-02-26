import { Component } from '@angular/core';
import { AvanzadoModel } from '../../models/advancedModels/Avanzado-Model';
import { InglesDesdeCero } from '../../services/inglesDesdeCero/ingles-desde-cero';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-desde-cero',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './desde-cero.html',
  styleUrl: './desde-cero.css',
})
export class DesdeCero {
  sections : AvanzadoModel[]= []
    
  
    constructor(public inglesDesdeCeroService : InglesDesdeCero){}
  
  ngOnInit(): void {
    this.inglesDesdeCeroService.getBasicSections().subscribe(data => {
      this.sections = data;
    });
  
  }
  
}
