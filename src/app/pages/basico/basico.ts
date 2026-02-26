import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicItem, BasicModel } from '../../models/basic-model';
import { RouterOutlet } from '@angular/router';
import { BasicService } from '../../services/basico/basic-service';

@Component({
  selector: 'app-basico',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
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


