import { Component, OnInit } from '@angular/core'; 
import { interval } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
 
})
export class HomeComponent implements OnInit{
  
   nbrStudent:number=0;
   nbrDepartement:number=0;
   nbrTeacher:number=0;
   


  ngOnInit(): void {
    this.initNbrStudent();
    this.initNbrDepartement();
    this.initNbrTeacher();
  }

  initNbrStudent(){
    var max=700;
    var intervalid =setInterval(()=>{
     this.nbrStudent++
     if(max<=this.nbrStudent) clearInterval(intervalid)
    },1);
   
  }

  
  initNbrDepartement(){
    var max=7;
    var intervalid =setInterval(()=>{
     this.nbrDepartement++
     if(max<=this.nbrDepartement) clearInterval(intervalid)
    },400);
  }
  initNbrTeacher(){
    var max=60;
    var intervalid =setInterval(()=>{
     this.nbrTeacher++
     if(max<=this.nbrTeacher) clearInterval(intervalid)
    },40);
  }
}
