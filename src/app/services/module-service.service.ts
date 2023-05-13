import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Module } from '../Entities/Module';

@Injectable({
  providedIn: 'root'
})
export class ModuleServiceService {
  private apiServerUrl = 'http://localhost:8222/note-service/api/v1';

  constructor(private http: HttpClient) { }

  public getModules(): Observable<Module[]> {
    return this.http.get<Module[]>(`${this.apiServerUrl}/modules`);
  }
}
