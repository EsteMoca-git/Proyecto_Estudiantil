import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AvanzadoService } from '../../services/avanzado/avanzado-service';
import { AvanzadoModel, AvanzadoItem } from '../../models/advancedModels/Avanzado-Model';


@Component({
  selector: 'app-avanzado',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './avanzado.html',
  styleUrl: './avanzado.css',
})
export class Avanzado implements OnInit {
  sections : AvanzadoModel[]= []
  

  constructor(public avanzadoService : AvanzadoService){}

ngOnInit(): void {
  this.avanzadoService.getBasicSections().subscribe(data => {
    this.sections = data;
  });

}

}
