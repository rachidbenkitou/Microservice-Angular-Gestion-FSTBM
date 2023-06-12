import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Module } from '../Entities/Module';
import { Etudiant } from '../models/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class ModuleServiceService {
  private apiServerUrl = 'http://localhost:8222/note-service/api/v1/modules';

  constructor(private http: HttpClient) { }

  public getModules(): Observable<Module[]> {
    return this.http.get<Module[]>(`${this.apiServerUrl}`);
  }

  public getModuleById(idModule: number): Observable<Module> {
    return this.http.get<Module>(`${this.apiServerUrl}/moduleId/${idModule}`);
  }

  public addModule(module: Module): Observable<Module> {
    return this.http.post<Module>(`${this.apiServerUrl}`, module);
  }

  public updateModule(module: Module): Observable<Module> {
    return this.http.put<Module>(`${this.apiServerUrl}`, module);
  }

  public deleteModule(moduleName: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/${moduleName}`);
  }



  public getEtudiantsByModuleId(moduleId:number):Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>('');
  }
}
