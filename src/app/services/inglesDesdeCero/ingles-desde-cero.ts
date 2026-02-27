import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DesdeCeroModel } from '../../models/InglesDesdeCero/inglesDesdeCero';

@Injectable({
  providedIn: 'root',
})
export class InglesDesdeCero {
  private dataUrl = 'assets/data/inglesDesdeCero.json'

  constructor(private httpDesdeCero : HttpClient){}

  getDesdeCeroSections(): Observable<DesdeCeroModel[]> {
    return this.httpDesdeCero.get<DesdeCeroModel[]>(this.dataUrl);
  }
}
