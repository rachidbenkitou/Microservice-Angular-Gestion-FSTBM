import { Module } from './../../../Entities/Module';
import { CourService } from 'src/app/services/cour.service';
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

  etudiantsStore:Etudiant[]=[];

  note:Note=new Note();

  module:Module=new Module();

  nomEtuiantSearch:string='';

  constructor(private moduleService:ModuleServiceService,private noteService:NoteService,private courService:CourService){
    
  }
  
  ngOnInit(): void {
    this.courService.getModuleByEnseignantCin("1223").subscribe((res)=>{
      this.module=res;
      
      this.getEtudiantsByModuleId(this.module.moduleId)

    })

    

    
  }
  getEtudiantsByModuleId(moduleId:number){
    this.moduleService.getEtudiantsByModuleId(moduleId).subscribe(res=>{
      this.etudiants=res;
      
    })
  }

  searchByNom(){
    this.etudiantsStore=this.etudiants;
    this.etudiants=this.etudiants.filter((etudiant)=>etudiant.nom.includes(this.nomEtuiantSearch))
  }

  cancel(){
    this.etudiants=this.etudiantsStore;
    this.etudiantsStore=[];
  }
  
  
  etudiantSelectionne: any = null;

  afficherDetails(etudiant: any): void {
    this.etudiantSelectionne = etudiant;
    this.noteService.getNotesByCinAndModuleId(etudiant.cin,this.module.moduleId).subscribe((res)=>{
      this.note=res;
    });
  }

  modifierEtudiant(etudiant: any): void {
    // Logique pour la modification de l'étudiant
    console.log('Modifier l\'étudiant :', etudiant);
  }
}