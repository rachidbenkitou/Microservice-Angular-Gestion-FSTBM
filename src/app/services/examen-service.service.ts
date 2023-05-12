import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Examen} from "../Entities/Examen";
import {HttpClient} from "@angular/common/http";
import {Module} from "../Entities/Module";

@Injectable({
  providedIn: 'root'
})
export class ExamenServiceService {

  constructor(private http : HttpClient) { }

  getallExamens():Observable<Array<Examen>>{
    return this.http.get<Array<Examen>>("http://localhost:8222/note-service/examens")
  }
    getExamenById(id : number):Observable<Examen>{
    return this.http.get<Examen>("http://localhost:8222/note-service/examens/"+id)
  }
   getallModulesForSave():Observable<Array<Module>>{
    return this.http.get<Array<Module>>("http://localhost:8222/note-service/modules")
  }
   getModuleByIdForSave(id : number):Observable<Module>{
    return this.http.get<Module>("http://localhost:8222/note-service/modules/moduleId/"+id)
  }
   saveExamen(examen : Examen): Observable<Examen>{
   return  this.http.post<Examen>("http://localhost:8222/note-service/examens",examen);
  }
    updateExamen(examen:Examen , id : number):Observable<Examen>{
    return  this.http.put<Examen>("http://localhost:8222/note-service/examens/"+id,examen);
  }
  deleteExamen(id:number){
    return  this.http.delete("http://localhost:8222/note-service/examens/"+id);
  }}
