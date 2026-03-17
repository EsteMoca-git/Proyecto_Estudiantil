import { Component, OnInit } from '@angular/core';
import { IntermediateItem, IntermediateModel } from '../../models/intermediateModels/Intermediate-Model';
import { IntermediateService } from '../../services/intermedio/intermediate-service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-intermedio',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule ],
  templateUrl: './intermedio.html',
  styleUrls: ['./intermedio.css'],
})
export class Intermedio implements OnInit {
  sections: IntermediateModel[] = [];

  constructor(public intermediateService: IntermediateService) {}

  ngOnInit(): void {
    this.intermediateService.getIntermediateSections().subscribe((data: IntermediateModel[]) => {
      this.sections = data;
    });
  }
}
