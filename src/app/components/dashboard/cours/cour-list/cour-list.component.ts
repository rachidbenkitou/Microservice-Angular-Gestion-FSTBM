import { Component , OnInit } from '@angular/core';
import { Cour } from 'src/app/models/cour';
import { CourService } from 'src/app/services/cour.service';

@Component({
  selector: 'app-cour-list',
  templateUrl: './cour-list.component.html',
  styleUrls: ['./cour-list.component.scss']
})
export class CourListComponent implements OnInit{

  listCour:Cour[]=[]
  constructor(private service:CourService){}
  ngOnInit():void{
    this.getAllCour()
}
  getAllCour(){
    this.service.getAllcour().subscribe((res)=>{
      console.log(res)
      this.listCour=res;
    });
  }
  download(id:number){
    this.service.download(id).subscribe((res)=>{
      
      const file = new Blob([res], { type: 'application/pdf' });
   
      const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(file)
        a.href = objectUrl
        a.download = `${id}.pdf`;
        a.click();
        URL.revokeObjectURL(objectUrl);
    })
    
  }}
