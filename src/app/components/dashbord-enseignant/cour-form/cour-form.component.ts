import { ModuleServiceService } from './../../../services/module-service.service';
import { Module } from './../../../Entities/Module';
import { LoginService } from './../../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cour } from 'src/app/models/cour';
import { CourService } from 'src/app/services/cour.service';

@Component({
  selector: 'app-cour-form',
  templateUrl: './cour-form.component.html',
  styleUrls: ['./cour-form.component.scss']
})
export class CourFormComponent implements OnInit{


  cour:Cour;
  file!:File;
  mode: string | undefined;
  cin:string='';
  modules:Module[]=[]

  constructor(private service:CourService ,private router: Router,private activateRoute: ActivatedRoute,private loginService:LoginService
    ,private moduleService: ModuleServiceService 
    ){

      console.log("add cour")
    this.cour=new Cour();
    // const id = this.activateRoute.snapshot.params['id'];
    // const path =this.activateRoute.snapshot.routeConfig?.path;
    // this.mode = path?.includes("edit") ? "edit": path?.includes("add") ? "add" : undefined;



  }
  ngOnInit(): void {
    console.log("add cour")

    this.cin=this.loginService.getCin()
    this.moduleService.getModules().subscribe((res)=>{
      this.modules=res;
    })

  }


  onFileChange(event:any) {
    this.file = event.target.files[0];
  }

  saveCour(){
    
    console.log(this.cour)
    this.service.saveCour(this.cin,this.cour).subscribe(
      (res)=>{
        var courResp=(res as Cour);
        var dataForm= new FormData();
        dataForm.append("file",this.file)
      this.service.uploadFile(courResp.id_cour,dataForm).subscribe((res)=>{
       this.router.navigateByUrl("/dashboard/ENSEIGNANT/cour")
      })
      }
    )
  }

  updateCour(){
    this.service.updateCour(this.cour.id_cour,this.cour)
  }
  submit() {
    if (this.mode === "edit") {
      this.updateCour();
    }
    if (this.mode === "add") {
      this.saveCour();
    }
    this.router.navigateByUrl("/dashboard/ENSEIGNANT/cour")
  }
  
}
