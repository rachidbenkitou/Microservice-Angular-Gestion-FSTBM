import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'src/app/services/enseignant.service';

@Component({
  selector: 'app-enseignent-form',
  templateUrl: './enseignent-form.component.html',
  styleUrls: ['./enseignent-form.component.scss']
})
export class EnseignentFormComponent implements OnInit{

  departementNames:string[]=[];
  constructor(private service:EnseignantService){

  }
  ngOnInit(): void {
    this.getDepartementNames()
  }

  getDepartementNames(){
    this.service.getDepartementNames().subscribe((res)=>{
      this.departementNames=res
    })
  }

}
