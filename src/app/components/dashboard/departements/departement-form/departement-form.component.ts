import { Router } from '@angular/router';
import { EnseignantService } from './../../../../services/enseignant.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-departement-form',
  templateUrl: './departement-form.component.html',
  styleUrls: ['./departement-form.component.scss']
})
export class DepartementFormComponent {
  departementName!: string;
 constructor(private service:EnseignantService,private route:Router){

 }
 save(){
  console.log("save")
  this.service.saveDepartement(this.departementName).subscribe(res=>{
console.log(res)
    this.route.navigateByUrl("dashboard/ADMIN/departements")
  });
}
}
