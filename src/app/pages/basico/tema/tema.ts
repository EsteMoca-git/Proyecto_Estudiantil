import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicService } from '../../../services/basic-service';
import { BasicItem } from '../../../models/basic-model';

@Component({
  selector: 'app-tema',
  standalone: true,
  imports: [],
  templateUrl: './tema.html',
  styleUrls: ['./tema.css',]
})
export class Tema implements OnInit {
  temaId!: string;
  tema? : BasicItem;

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
      })
      console.log('Tema cargado: ', this.tema)


    })
}
}
