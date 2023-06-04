import { CourService } from 'src/app/services/cour.service';
import { Cour } from './../../../models/cour';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cour-card',
  templateUrl: './cour-card.component.html',
  styleUrls: ['./cour-card.component.scss']
})
export class CourCardComponent implements OnInit{
  
  cour:Cour;

  blob!:Blob

  constructor(private courService: CourService){
    this.cour=new Cour()
  }


  ngOnInit() {
    this.courService.getCourByEnseignantCin("123").subscribe((res)=>{
      this.cour=res;
      this.initFile(this.cour.id_cour)
    })
  }
  initFile(id:number){
    this.courService.download(id).subscribe((res)=>{
      
      this.blob = new Blob([res], { type: 'application/pdf' });
   
      
    })
    
  }

  download(){
    const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(this.blob)
        a.href = objectUrl
        a.download = `${this.cour.intitule}.pdf`;
        a.click();
        URL.revokeObjectURL(objectUrl);
  }
}
