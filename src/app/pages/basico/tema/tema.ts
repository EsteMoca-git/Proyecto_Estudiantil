import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicService } from '../../../services/basic-service';
import { BasicItem } from '../../../models/basic-model';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Alfabeto } from '../gramatica/alfabeto/alfabeto';
import { Completar } from '../ejercicios/completar/completar';

const COMPONENT_MAP : Record<string, any> = {
  alfabeto: Alfabeto,
  completar: Completar,
};

@Component({
  selector: 'app-tema',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  templateUrl: './tema.html',
  styleUrls: ['./tema.css',]
})
export class Tema implements OnInit {

  tema? : BasicItem;
  componentToRender : any = null;

  constructor(
    private route: ActivatedRoute,
    private basicService : BasicService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const sectionsId = params.get('seccion')!;
      const temaId = params.get('tema')!;

      this.basicService.getBasicSections().subscribe(sections => {
        const section = sections.find(s => s.id === sectionsId);
        this.tema = section?.items.find(item => item.id === temaId)
      
      console.log('Tema cargado: ', this.tema)

      this.componentToRender = 
      COMPONENT_MAP[this.tema?.component || ''] || null;

      })

    })
}
}