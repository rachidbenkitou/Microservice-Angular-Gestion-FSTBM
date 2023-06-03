import { Component } from '@angular/core';
import {Note} from "../../../models/Note";
import {NoteService} from "../../../services/note.service";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
 listNotes : Array<Note> = new Array<Note>();
 listSemesters : Array<string> = new Array<string>();
 listNoteSemestre : Array<number> = new Array<number>();
  constructor(private noteServ : NoteService) {
  }
  ngOnInit() : void{
    this.noteServ.getallNotesByCin()
      .subscribe({
        next : (data)=>{
          this.listNotes = data;
          for (let n of this.listNotes) {

            if (this.listSemesters.includes(n.examen.module.moduleSemestre) == false) {
              this.listSemesters.push(n.examen.module.moduleSemestre);
            }
          }

        },
        error : (err)=>{
          console.log("err");
        }
      });
  }

  calculNote(s : string) : number{
    var not : number = 0;
    var i: number = 0;
    for (let n of  this.listNotes){


      if ( n.examen.module.moduleSemestre == s ) {
         not = not + n.note ;
         i=i+1;
    }
}
    not = not/6;
    if (i ==6){
      return not;
    }
    else {
      return 0;
    }


  }
}
