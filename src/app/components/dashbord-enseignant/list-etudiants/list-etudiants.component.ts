import { LoginService } from './../../../services/login.service';
import { EtudiantService } from './../../../services/etudiant.service';
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
  cin:string='';

  constructor(private moduleService:ModuleServiceService,private noteService:NoteService,
    private courService:CourService,private etudiantService:EtudiantService,private loginService:LoginService){
    
  }
  
  ngOnInit(): void {
    this.cin=this.loginService.getCin()
    this.courService.getModuleByEnseignantCin(this.cin).subscribe((res)=>{
      this.module=res;
      
      this.getEtudiantsByFilierId(this.module.idFiliere)

    })

    

    
  }
  getEtudiantsByFilierId(filiereId:string){
    this.etudiantService.getEtudiantByFilierId(filiereId).subscribe(res=>{
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