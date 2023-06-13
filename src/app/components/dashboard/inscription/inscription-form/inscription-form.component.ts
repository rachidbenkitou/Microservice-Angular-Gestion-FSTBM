import { Component } from '@angular/core';
import {Etudiant} from "../../../../models/Etudiant";
import {ActivatedRoute, Router} from "@angular/router";
import {InscriptionService} from "../../../../services/inscription.service";
import {Inscription} from "../../../../models/Inscription";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Niveau} from "../../../../models/Niveau";
import {FiliereService} from "../../../../services/filiere.service";
import {Filiere} from "../../../../models/Filiere";
import {EtudiantService} from "../../../../services/etudiant.service";
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.scss']
})
export class InscriptionFormComponent {
  mode: string | undefined;
  inscription : Inscription ={
    idInscription:"",
    filiere:{
      id:"", name:""
    },
    etudiant:{
      cin:"",nom:"",id:"",email:""
    }
  };
  updatedInscription : Inscription = {} as Inscription;
  id! : string;
  public filieres:  Array<Filiere> = [];
  constructor(private route: ActivatedRoute,
              private inscriptionService: InscriptionService,
              private filiereService: FiliereService,
              private etudiantService: EtudiantService,
              private router: Router,
              private activeRouter: ActivatedRoute) {}
  ngOnInit() {
    console.log(this.route); // ActivatedRoute
    const path =this.route.snapshot.routeConfig?.path;
    this.mode = path?.includes("edit") ? "edit": path?.includes("add") ? "add":undefined;
    if(this.mode=="edit"){
      this.id = this.activeRouter.snapshot.params['id'];
      this.getInscriptionById(this.id)
    }
    this.getAllFilieres()
    
  }
  submit() {
    if (this.mode === "edit") {
      this.editeinscription(this.inscription);
    }
    if (this.mode === "add") {
      this.addEtudaint(this.inscription);
    }
  }
  private getInscriptionById(id: string){
    this.inscriptionService.getInscriptionByid(id).subscribe(
      (data)=>{
        this.inscription = data;
        console.log(this.inscription)
      },
    (error)=>{
      console.log(error);
    }
    )
  }
  private editeinscription(inscription: Inscription) {
    console.log("originale inscription");
    console.log(inscription);
    console.log("edited inscription");
    console.log(this.updatedInscription);
    this.updatedInscription.idInscription = this.inscription.idInscription;
    this.updatedInscription.dateInscripton = this.inscription.dateInscripton;
    this.etudiantService.getEtudiantByCin(inscription.etudiant.cin).subscribe(
      (etudiantData) => {
        this.updatedInscription.etudiant = etudiantData;

        this.filiereService.getFiliereByName(inscription.filiere.name).subscribe(
          (filiereData) => {
            this.updatedInscription.filiere = filiereData;

            this.inscriptionService.updateInscription(this.updatedInscription).subscribe(
              (updatedData) => {
                this.router.navigate(['dashboard/inscriptions']);
              },
              (updateError) => {
                console.log("Failed to update inscription:", updateError);
              }
            );
          },
          (filiereError) => {
            console.log("Failed to fetch filiere data:", filiereError);
          }
        );
      },
      (etudiantError) => {
        console.log("Failed to fetch etudiant data:", etudiantError);
      }
    );
  }
  private addEtudaint(inscription: Inscription) {
    console.log("added inscription")
    console.log(inscription);
    this.inscriptionService.saveInscription(inscription).subscribe(
      (data)=>{

        this.router.navigateByUrl('dashboard/ADMIN/inscriptions/');

        this.getAllFilieres()
      }, (error)=>{
        console.log(error);
      }
    );
  }
  getNiveaux_1(){
    return Object.values(Niveau);
  }
  getNiveaux(): string[]{
      return Object.values(Niveau);
  }
  getAllFilieres(){
    this.filiereService.getAllFilieres().subscribe(
      (data)=>{
        this.filieres = data
        console.log(this.filieres)
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  cancel() {
    this.router.navigate(['dashboard/inscriptions/']);
  }
}
