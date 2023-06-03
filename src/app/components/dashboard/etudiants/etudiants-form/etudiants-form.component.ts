import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Etudiant} from "../../../../models/Etudiant";
import {EtudiantService} from "../../../../services/etudiant.service";

@Component({
  selector: 'app-etudiants-form',
  templateUrl: './etudiants-form.component.html',
  styleUrls: ['./etudiants-form.component.scss']
})

export class EtudiantsFormComponent {
  mode: string | undefined;
  etudaint : Etudiant = {} as Etudiant;
  id! : string;
  constructor(private route: ActivatedRoute,private etudiantService: EtudiantService, private router: Router, private activeRouter: ActivatedRoute) {}
ngOnInit() {
    console.log(this.route); // ActivatedRoute
    const path =this.route.snapshot.routeConfig?.path;
    this.mode = path?.includes("edit") ? "edit": path?.includes("add") ? "add":undefined;
    if(this.mode=="edit"){
      this.id = this.activeRouter.snapshot.params['id'];
      this.getEtudiantById(this.id)
    }
  }

  submit() {
    if (this.mode === "edit") {
      this.editeEtudaint(this.etudaint);
    }
    if (this.mode === "add") {
      this.addEtudaint(this.etudaint);
    }
  }
  public getEtudiantById(id: string){
     this.etudiantService.getEtudiantByid(id).subscribe(
       (data)=>{
         this.etudaint = data;
         console.log(this.etudaint);
       },
       (error)=>{
         console.log(error);
       }
     );
  }
  private editeEtudaint(etudaint: Etudiant) {
    console.log(etudaint);
    this.etudiantService.updateEtudiant(etudaint).subscribe(
      (data)=>{
        this.router.navigate(['dashboard/etudiants/']);
      }, (error)=>{
        console.log(error);
      }
    );
  }

  private addEtudaint(etudaint: Etudiant) {
    console.log(etudaint);
    this.etudiantService.saveEtudiant(etudaint).subscribe(
      (data)=>{
        this.router.navigate(['dashboard/etudiants/']);
      }, (error)=>{
        console.log(error);
      }
    );
  }
}
