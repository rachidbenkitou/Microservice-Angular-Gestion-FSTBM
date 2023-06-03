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

  constructor(private service:CourService ){
    this.cour=new Cour();
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
        console.log(res)
         var courResp=(res as Cour);
        var dataForm= new FormData();
        dataForm.append("file",this.file)
      this.service.uploadFile(courResp.id_cour,dataForm).subscribe((res)=>{
        console.log(res)
      })
      }
    )
  }
}
