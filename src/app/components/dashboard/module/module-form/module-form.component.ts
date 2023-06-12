import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Module } from 'src/app/Entities/Module';
import { ModuleServiceService } from 'src/app/services/module-service.service';

@Component({
  selector: 'app-module-form',
  templateUrl: './module-form.component.html',
  styleUrls: ['./module-form.component.scss']
})
export class ModuleFormComponent implements OnInit {

  formGroup !: FormGroup
  module !: Module

  constructor(private fb: FormBuilder, private moduleService: ModuleServiceService, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      moduleName: this.fb.control(null, [Validators.required]),
      moduleSemestre: this.fb.control(null, [Validators.required]),
    })
  }

  onAddModule() {
    const moduleName = this.formGroup.get('moduleName')?.value;
    const moduleSemestre = this.formGroup.get('moduleSemestre')?.value;
    this.module = new Module();

        this.module.moduleName=moduleName;
        this.module.moduleSemestre=moduleSemestre;        
        console.log(this.module)
        if(this.module.moduleName== null && this.module.moduleSemestre==null){
          alert('Essayer de remplir les champs!');
          return;
        }
        this.moduleService.addModule(this.module).subscribe({
          next: (data) => {

            console.log(this.module)
            this.showComponentModuleList();
          }
        })
        
      }

  getErrorMessag(name: string, errors: ValidationErrors) {
    if (errors['required']) {

      return name + ' is required';
    }
    else return ""

  }

  showComponentModuleList() {
    this.router.navigate(['/dashboard/ADMIN/module']);
  }

}