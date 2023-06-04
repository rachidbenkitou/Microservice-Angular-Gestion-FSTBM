import { NoteService } from './../../../services/note.service';
import { ModuleServiceService } from 'src/app/services/module-service.service';
import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/Etudiant';
import { Note } from 'src/app/models/Note';

@Component({
  selector: 'app-list-etudiants',
  templateUrl: './list-etudiants.component.html',
  styleUrls: ['./list-etudiants.component.scss']
})
export class ListEtudiantsComponent implements OnInit{
  
  etudiants:Etudiant[]=[];

  note?:Note;

  constructor(private moduleService:ModuleServiceService,private noteService:NoteService){
    
  }
  
  ngOnInit(): void {
    this.moduleService.getEtudiantsByModuleId(1).subscribe(res=>{
      this.etudiants=res;
    })
    
  }
  
  etudiantSelectionne: any = null;

  afficherDetails(etudiant: any): void {
    this.etudiantSelectionne = etudiant;
    this.noteService.getNotesByCinAndModuleId(1,1).subscribe((res)=>{
      this.note=res;
    });
  }

  modifierEtudiant(etudiant: any): void {
    // Logique pour la modification de l'étudiant
    console.log('Modifier l\'étudiant :', etudiant);
  }
}