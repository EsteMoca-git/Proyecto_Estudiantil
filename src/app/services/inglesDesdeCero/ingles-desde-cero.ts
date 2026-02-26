import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicModel } from '../../models/basic-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InglesDesdeCero {
  private dataUrl = 'assets/data/inglesDesdeCero.json'

  constructor(private httpinglesDesdeCero : HttpClient){}

  getBasicSections(): Observable<BasicModel[]> {
    return this.httpinglesDesdeCero.get<BasicModel[]>(this.dataUrl);
  }
}
