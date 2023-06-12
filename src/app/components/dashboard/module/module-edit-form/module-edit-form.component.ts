import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from 'src/app/Entities/Module';
import { ModuleServiceService } from 'src/app/services/module-service.service';

@Component({
  selector: 'app-module-edit-form',
  templateUrl: './module-edit-form.component.html',
  styleUrls: ['./module-edit-form.component.scss']
})
export class ModuleEditFormComponent implements OnInit {
  formGroup !: FormGroup
  module !: Module
  moduleId!: number

  constructor(public activateroute: ActivatedRoute, private fb: FormBuilder, private moduleService: ModuleServiceService, private router: Router) {
    this.moduleId = activateroute.snapshot.params['moduleId'];
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      moduleId: this.fb.control(null, [Validators.required]),
      moduleName: this.fb.control(null, [Validators.required]),
      moduleSemestre: this.fb.control(null, [Validators.required]),
    })

    this.moduleService.getModuleById(this.moduleId).subscribe(
      {
        next: (data) => {
          this.module = new Module()
          this.module = data
          console.log(this.module, 'from module ongInit rachido')
          console.log(this.module.moduleName, 'from module ongInit')
          const oldModule = { moduleId: data.moduleId,moduleName: data.moduleName, moduleSemestre: data.moduleSemestre }
          console.log(oldModule, 'from old module')
          this.formGroup.patchValue(oldModule);
        }
      }
    )

    console.log()
  }

  onUpdateModule() {
    const moduleName = this.formGroup.get('moduleName')?.value;
    const moduleSemestre = this.formGroup.get('moduleSemestre')?.value;
    const moduleId = this.formGroup.get('moduleId')?.value;
    this.module = new Module();
    this.module.moduleId = moduleId
    this.module.moduleName = moduleName;
    this.module.moduleSemestre = moduleSemestre;
    console.log(this.module, 'From USA BRO')
    if (this.module.moduleName == null && this.module.moduleSemestre == null) {
      alert('Essayer de remplir les champs!');
      return;
    }
    this.moduleService.updateModule(this.module).subscribe({
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
