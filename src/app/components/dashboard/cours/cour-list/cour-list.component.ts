import { Component , OnInit } from '@angular/core';
import { Cour } from 'src/app/models/cour';
import { CourService } from 'src/app/services/cour.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cour-list',
  templateUrl: './cour-list.component.html',
  styleUrls: ['./cour-list.component.scss']
})
export class CourListComponent implements OnInit{

  listCour:Cour[]=[]
  intitule:string="";
  constructor(private service:CourService,private router: Router){}
  ngOnInit():void{
    this.getAllCour()
}
  getAllCour(){
    this.service.getAllcour().subscribe((res)=>{
     
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
    
  }

  edit(id:number){
    this.router.navigate(['/dashboard/ADMIN/cours/edit/'+id]);
  }

  searchByIntitule(){
    this.service.searchByIntitule(this.intitule).subscribe(res=>{
      this.listCour=res
    })
  }

  cancel(){
    this.getAllCour()
  }
}
