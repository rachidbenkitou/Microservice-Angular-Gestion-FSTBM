import { EnseignantService } from 'src/app/services/enseignant.service';
import { Component, OnInit } from '@angular/core';
import { enseignant } from 'src/app/models/enseignant';

@Component({
  selector: 'app-enseignent-list',
  templateUrl: './enseignent-list.component.html',
  styleUrls: ['./enseignent-list.component.scss']
})
export class EnseignentListComponent implements OnInit{

  enseignants:enseignant[]=[];
  departementNames:string[]=[]
  departementName!:string;
  cin!:string 
  constructor(private service:EnseignantService){

  }
  ngOnInit(): void {
    this.getAllEnseignat();
    this.getDepartementNames();
  }


  getAllEnseignat(){
    this.service.getAllEnseignant().subscribe((res)=>{
      console.log(res)
      this.enseignants=res;
    })
  }
  
  deleteEnseignat(id:number){
    this.service.deleteEnseignantById(id).subscribe(()=>{
      this.enseignants=this.enseignants.filter(e => e.id!=id);

    })
  }

  searchByCIN(){
    this.service.getEnseignantByCIN(this.cin).subscribe((res)=>{
      this.enseignants=[]
      console.log(res)
      if(res!=null)this.enseignants.push(res)
    })
  }
  searchByDepartement(){
    this.service.getEnseignantByDepartement(this.departementName).subscribe((res)=>{
      this.enseignants=res
    })
  }

  getDepartementNames(){
    this.service.getDepartementNames().subscribe((res)=>{
      console.log(res)
      this.departementNames=res
    })
  }
}
