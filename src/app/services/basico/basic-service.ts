import { Injectable } from '@angular/core';
import { BasicModel } from '../../models/basic-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasicService {
  private backendUrl = 'http://localhost:3000/basic'; // ruta del backend

  constructor(private http: HttpClient) {}

  getBasicSections(): Observable<BasicModel[]> {
    return this.http.get<BasicModel[]>(this.backendUrl);
  }
}
