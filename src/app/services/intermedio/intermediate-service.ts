
import { Injectable } from '@angular/core';
import { IntermediateModel } from '../../models/intermediateModels/Intermediate-Model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntermediateService {
  private dataUrlIntermediate = 'assets/data/intermediate.json'

  constructor(private httpIntermediate : HttpClient){}

  getItermediateSections(): Observable<IntermediateModel[]> {
    return this.httpIntermediate.get<IntermediateModel[]>(this.dataUrlIntermediate);
  }
}

