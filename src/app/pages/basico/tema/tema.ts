import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BasicItem } from '../../../models/basic-model';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Alfabeto } from '../gramatica/alfabeto/alfabeto';
import { Completar } from '../ejercicios/completar/completar';
import { BasicService } from '../../../services/basico/basic-service';
import { Pronombres } from '../gramatica/pronombres/pronombres';
import { ToBe } from '../gramatica/to-be/to-be';
import { Articulos } from '../gramatica/articulos/articulos';
import { Numeros } from '../vocabulario/numeros/numeros';
import { IntermediateService } from '../../../services/intermedio/intermediate-service';
import { IntermediateItem, IntermediateModel } from '../../../models/intermediateModels/Intermediate-Model';
import { AvanzadoService } from '../../../services/avanzado/avanzado-service';
import { AvanzadoItem, AvanzadoModel } from '../../../models/advancedModels/Avanzado-Model';
import { InglesDesdeCero } from '../../../services/inglesDesdeCero/ingles-desde-cero';
import { desdeCeroItem, DesdeCeroModel } from '../../../models/InglesDesdeCero/inglesDesdeCero';

const COMPONENT_MAP : Record<string, any> = {
  alfabeto: Alfabeto,
  completar: Completar,
  pronombres: Pronombres,
  tobe: ToBe,
  articulos: Articulos,
  numeros: Numeros,
};

@Component({
  selector: 'app-tema',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  templateUrl: './tema.html',
  styleUrls: ['./tema.css',]
})
export class Tema implements OnInit {
  contenido: any;
  itemCurrent: any;
  currentItem: any;
  tema? : BasicItem;
  componentToRender : any = null;

  constructor(
    private route: ActivatedRoute,
    private basicService : BasicService,
    private intermediateService : IntermediateService,
    private avanzadoService : AvanzadoService,
    private desdeCeroService: InglesDesdeCero
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const sectionsId = params.get('seccion')!;
      const temaId = params.get('tema')!;

      this.basicService.getBasicSections().subscribe(sections => {
        const section = sections.find(s => s.id === sectionsId);
        this.tema = section?.items.find((item: BasicItem) => item.id === temaId);

      
      console.log('Tema cargado: ', this.tema)

      this.componentToRender = 
      COMPONENT_MAP[this.tema?.component || ''] || null;

      })

    });


    //Renderizando los temas del nivel intermedio en el mismo componente tema
  this.route.paramMap.subscribe(params => {
    const seccion = params.get('seccion');
    const tema = params.get('tema');

    this.intermediateService
      .getIntermediateSections()
      .subscribe((data: IntermediateModel[]) => {

        const section = data.find(
          (s: IntermediateModel) => s.id === seccion
        );

        if (section) {
          this.currentItem = section.items.find(
            (i: IntermediateItem) => i.id === tema
          );
        }

      });
  });


  //Renderizado de los temaas Avanzados
  
  this.route.paramMap.subscribe(params => {
    const seccion = params.get('seccion');
    const tema = params.get('tema');

    this.avanzadoService
      .getAvanzadoSections()
      .subscribe((data: AvanzadoModel[]) => {

        const section = data.find(
          (s: AvanzadoModel) => s.id === seccion
        );

        if (section) {
          this.itemCurrent = section.items.find(
            (i: AvanzadoItem) => i.id === tema
          );
        }

      });
  });



  //Renderizado de Desde Cero
  
  this.route.paramMap.subscribe(params => {
    const seccion = params.get('seccion');
    const tema = params.get('tema');

    this.desdeCeroService
      .getDesdeCeroSections()
      .subscribe((data: DesdeCeroModel[]) => {

        const section = data.find(
          (s: DesdeCeroModel) => s.id === seccion
        );

        if (section) {
          this.contenido = section.items.find(
            (i: desdeCeroItem) => i.id === tema
          );
        }

      });
  });

}
}
