import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ environment } from '../../environments/environment';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  apiAws: string;

  constructor(private http: HttpClient) { this.apiAws = environment.apiAws.api;}

  reads(): Observable<Persona[]> {
    return this.http.get <Persona[]>(this.apiAws + '/reads');
  }
}
