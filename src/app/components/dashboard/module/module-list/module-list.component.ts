import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from 'src/app/Entities/Module';
import { ModuleServiceService } from 'src/app/services/module-service.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit{
  public modules!: Module[];
  formGroup !: FormGroup


  constructor(public activateroute:ActivatedRoute,private fb: FormBuilder,private moduleService: ModuleServiceService, private router: Router){}

  ngOnInit() {
    this.getModules();

  }

  public getModules(): void {
    this.moduleService.getModules().subscribe(
      (response: Module[]) => {
        this.modules = response;
        console.log(this.modules);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteModule(moduleName: string): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le module '${moduleName}'?`)) {
      this.moduleService.deleteModule(moduleName).subscribe(
        (response: void) => {
          console.log(response);
          this.getModules();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    } else {
      // User clicked "No", do nothing
    }
  }
  
  showComponentModuleForm() {
    this.router.navigate(['/dashboard/ADMIN/module/add']);
  }

  onUpdateModule(k: number) {
    this.router.navigate(['dashboard/ADMIN/module/edit/',k]);
    console.log('List-Module',k);

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


