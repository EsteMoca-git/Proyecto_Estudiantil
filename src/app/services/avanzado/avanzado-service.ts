import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AvanzadoModel } from '../../models/advancedModels/Avanzado-Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AvanzadoService {
  private dataUrl = 'assets/data/avanzado.json'

  constructor(private httpAvanzado : HttpClient){}

  getAvanzadoSections(): Observable<AvanzadoModel[]> {
    return this.httpAvanzado.get<AvanzadoModel[]>(this.dataUrl);
  }
}

