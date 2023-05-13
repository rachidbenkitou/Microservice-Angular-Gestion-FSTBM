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
    return this.http.get<Array<Examen>>("http://localhost:8222/note-service/api/v1/examens")
  }
    getExamenById(id : number):Observable<Examen>{
    return this.http.get<Examen>("http://localhost:8222/note-service/api/v1/examens/"+id)
  }
   getallModulesForSave():Observable<Array<Module>>{
    return this.http.get<Array<Module>>("http://localhost:8222/note-service/api/v1/modules")
  }
   getModuleByIdForSave(id : number):Observable<Module>{
    return this.http.get<Module>("http://localhost:8222/note-service/api/v1/modules/moduleId/"+id)
  }
   saveExamen(examen : Examen): Observable<Examen>{
   return  this.http.post<Examen>("http://localhost:8222/note-service/api/v1/examens",examen);
  }
    updateExamen(examen:Examen , id : number):Observable<Examen>{
    return  this.http.put<Examen>("http://localhost:8222/note-service/api/v1/examens/"+id,examen);
  }
  deleteExamen(id:number){
    return  this.http.delete("http://localhost:8222/note-service/api/v1/examens/"+id);
  }
  searchExamen(keyword1 : string , keyword2: string) : Observable<Array<Examen>>{
    return  this.http.get<Array<Examen>>("http://localhost:8222/note-service/api/v1/examens/search?key1="+keyword1+"&key2="+keyword2);
  }
}
