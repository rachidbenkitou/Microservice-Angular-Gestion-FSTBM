import { LoginService } from './../../../services/login.service';
import { CourService } from 'src/app/services/cour.service';
import { Cour } from './../../../models/cour';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cour-card',
  templateUrl: './cour-card.component.html',
  styleUrls: ['./cour-card.component.scss']
})
export class CourCardComponent implements OnInit{
  
  cour:Cour;

  blob!:Blob

  pdfUrl!: SafeUrl;

  cin:string=''


  constructor(private courService: CourService,private sanitizer: DomSanitizer,private loginService:LoginService){
    this.cour=new Cour()
  }


  ngOnInit() {
        this.cin=this.loginService.getCin();

    this.courService.getCourByEnseignantCin(this.cin).subscribe((res)=>{
      this.cour=res;
      console.log(this.cour)
      if(this.cour.id_cour!=null) this.initFile(this.cour.id_cour)
    })
  }
  initFile(id:number){
      this.courService.download(id).subscribe((res)=>{
      
      this.blob = new Blob([res], { type: 'application/pdf' });
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(this.blob));

   
      
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

  deleteById(id:number){
    this.courService.deleteById(id).subscribe();
    this.cour=new Cour();
  }
}
