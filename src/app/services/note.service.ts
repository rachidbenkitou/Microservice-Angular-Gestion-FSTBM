import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Examen} from "../Entities/Examen";
import {Note} from "../models/Note";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http : HttpClient) { }

  getallNotesByCin():Observable<Array<Note>>{
    return this.http.get<Array<Note>>("http://localhost:8222/note-service/api/v1/notes/cin/123")
  }

  getNotesByCinAndModuleId(cin:number , moduleId:number){
    return this.http.get<Note>(`http://localhost:8222/note-service/api/v1/notes/${cin}/${moduleId}`)
  }
}
