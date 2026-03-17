
import { Injectable } from '@angular/core';
import { IntermediateModel } from '../../models/intermediateModels/Intermediate-Model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntermediateService {
  

  private useBackend = true;
  private backendUrl = 'http://localhost:3000/intermediate';
  private jsonUrl = 'assets/data/intermediate.json';


  constructor(private http : HttpClient){}

  getIntermediateSections(): Observable<IntermediateModel[]> {
    const url = this.useBackend ? this.backendUrl : this.jsonUrl;
    return this.http.get<IntermediateModel[]>(url);
  }
}

