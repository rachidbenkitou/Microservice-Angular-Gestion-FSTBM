import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Examen } from 'src/app/Entities/Examen';
import { Module } from 'src/app/Entities/Module';
import { ExamenServiceService } from 'src/app/services/examen-service.service';

@Component({
  selector: 'app-examens-form',
  templateUrl: './examens-form.component.html',
  styleUrls: ['./examens-form.component.scss']
})
export class ExamensFormComponent implements OnInit{

  formGroup !:FormGroup
  examen !: Examen
  modules !: Array<Module>
  module : Module = new Module()
  varia !: any
  constructor(private fb : FormBuilder,private router : Router,private examenServ : ExamenServiceService) {

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
  }


handleAddProduct() {
     const typeValue = this.formGroup.get('type')?.value;
    const dateExamValue = this.formGroup.get('dateExam')?.value;
    const moduleValue = this.formGroup.get('module')?.value;

     this.examenServ.getModuleByIdForSave(moduleValue).subscribe({
       next: (data) => {
               this.module = data
            this.examen =new Examen(typeValue, dateExamValue,this.module)
            this.examen.DcreationDateTime= new Date()
              console.log(this.module)
       this.examenServ.saveExamen(this.examen).subscribe({
        next : (data) =>{


          this.router.navigateByUrl("dashboard/ENSEIGNANT/exams")
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
