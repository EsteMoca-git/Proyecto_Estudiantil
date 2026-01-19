import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicItem, BasicModel } from '../../models/basic-model';
import { BasicService } from '../../services/basic-service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-basico',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterOutlet],
  templateUrl: './basico.html',
  styleUrls: ['./basico.css'],
})
export class Basico implements OnInit {

  sections : BasicModel[]= []
  

  constructor(public basicService : BasicService){}

ngOnInit(): void {
  this.basicService.getBasicSections().subscribe(data => {
    this.sections = data;
  });
}



}


