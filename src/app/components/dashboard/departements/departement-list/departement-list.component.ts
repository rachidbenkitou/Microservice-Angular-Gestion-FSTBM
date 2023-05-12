import { departement } from './../../../../models/departement';
import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'src/app/services/enseignant.service';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.scss']
})
export class DepartementListComponent implements OnInit {

  departements:departement[]  =[];
  departementName!:string;
  constructor(private service:EnseignantService){

  }
  ngOnInit(): void {
    this.service.getAll().subscribe((res)=>{
  this.departements=res;
    })
  }

  findByName(){
    this.service.getByName(this.departementName).subscribe((res)=>{
      this.departements=[];
      this.departements.push(res)
    })
  }

  deleteById(id:number){
    this.service.deleteDepartementById(id).subscribe(()=>{
      console.log('deleted')
      this.departements=this.departements.filter(d => d.id!=id);
    });
  }


}
