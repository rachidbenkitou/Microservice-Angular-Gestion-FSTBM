import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Cour } from 'src/app/models/cour';
import { CourService } from 'src/app/services/cour.service';

@Component({
  selector: 'app-cour-form',
  templateUrl: './cour-form.component.html',
  styleUrls: ['./cour-form.component.scss']
})
export class CourFormComponent {

 
  cour:Cour;
  file!:File;
  mode: string | undefined;
  constructor(private service:CourService ,private router: Router,private activateRoute: ActivatedRoute){
    this.cour=new Cour();
    const id = this.activateRoute.snapshot.params['id'];
    const path =this.activateRoute.snapshot.routeConfig?.path;
    this.mode = path?.includes("edit") ? "edit": path?.includes("add") ? "add" : undefined;

    if (this.mode === "edit") {
      this.service.getById(id).subscribe(res=>{
        this.cour=(res as Cour)
      })
    }
  }


  onFileChange(event:any) {
    this.file = event.target.files[0];
  }

  saveCour(){
    this.cour.idModule=3;
    this.cour.id_enseignant=2 ;
    console.log(this.cour)
    this.service.saveCour(this.cour).subscribe(
      (res)=>{
        var courResp=(res as Cour);
        var dataForm= new FormData();
        dataForm.append("file",this.file)
      this.service.uploadFile(courResp.id_cour,dataForm).subscribe((res)=>{
        console.log(res)
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
    this.router.navigate(['dashboard/cour']);
  }
  
}
