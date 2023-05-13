import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {ExamenServiceService} from "../../../../services/examen-service.service";
import {Examen} from "../../../../Entities/Examen";
import {Module} from "../../../../Entities/Module";

@Component({
  selector: 'app-examen-edit-form',
  templateUrl: './examen-edit-form.component.html',
  styleUrls: ['./examen-edit-form.component.scss']
})
export class ExamenEditFormComponent implements OnInit{
  formGroup ! : FormGroup
  id !: number
  examen!: Examen
  module !: Module
  modules !: Array<Module>
  constructor(public activateroute:ActivatedRoute,private fb : FormBuilder,
              private examenServ : ExamenServiceService, private  router : Router) {
     this.id= activateroute.snapshot.params['id'];
  }
    ngOnInit(): void {
       this.examenServ.getallModulesForSave().subscribe({
      next : (data) =>{
        this.modules=data;
      }});
    this.formGroup = this.fb.group({
      type : this.fb.control(null,[Validators.required]),
      dateExam : this.fb.control(null,[Validators.required]),
      module : this.fb.control(null,[Validators.required])
    })
    this.examenServ.getExamenById(this.id).subscribe(
      {
      next : (data) =>{
        this.examen = data
        const oldExamen = {type : this.examen.type ,module : this.examen.module.moduleId}
        this.formGroup.patchValue(oldExamen);
      }}
    )
  }

  handleUpdateProduct() {
    const typeValue = this.formGroup.get('type')?.value;
    const dateExamValue = this.formGroup.get('dateExam')?.value;
    const moduleValue = this.formGroup.get('module')?.value;

     this.examenServ.getModuleByIdForSave(moduleValue).subscribe({
       next: (data) => {
               this.module = data
            this.examen =new Examen(typeValue, dateExamValue,this.module)
            this.examen.DcreationDateTime= new Date()
              console.log(this.module)
       this.examenServ.updateExamen(this.examen,this.id).subscribe({
        next : (data) =>{

           this.router.navigateByUrl("dashboard/examens")
     }
     })
       }
    })



  }
    getErrorMessag(name: string, errors: ValidationErrors) {
     if (errors['required']){

       return  name+' is required';
     }
     else return ""

  }

}
