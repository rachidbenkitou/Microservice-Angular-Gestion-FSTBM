import { Router } from '@angular/router';
import { enseignant } from './../../../../models/enseignant';
import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-enseignent-form',
  templateUrl: './enseignent-form.component.html',
  styleUrls: ['./enseignent-form.component.scss']
})
export class EnseignentFormComponent implements OnInit{

  departementNames:string[]=[];
  enseignant:enseignant={
    id:0,
    nom:'',
	 prenom:'',
	 adresse:'',
	 email:'',
	 password:'',
	 cin:'',
	 departement:{
    id:0,
    nameDeparetement:''
   }
  };
  user:User={
    cin:'',
    password:'',
    roleNames:[],
    email:''
  } ;
  constructor(private service:EnseignantService,private route:Router){

  }
  ngOnInit(): void {
    this.getDepartementNames()
  }

  getDepartementNames(){
    this.service.getDepartementNames().subscribe((res)=>{
      console.log(res)
      this.departementNames=res
    })
  }

  saveEnseignat(){
    this.user.cin=this.enseignant.cin
    this.user.email=this.enseignant.email
    this.user.password=this.enseignant.password
    this.user.roleNames=[]
    this.user.roleNames.push('ENSEIGNANT')

    this.service.insertUser(this.user).subscribe(()=>{
      this.service.insertEnseignant(this.enseignant).subscribe((res)=>{
        console.log(res)
        this.route.navigateByUrl("/dashboard/ADMIN/enseignents")

      })
    });
  }

}
