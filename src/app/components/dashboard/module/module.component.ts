import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/Entities/Module';
import { ModuleServiceService } from 'src/app/services/module-service.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  ngOnInit(): void {
    this.getModules();
  }
  constructor(private moduleService: ModuleServiceService){}
  
  public modules: Module[] = [];


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

}
