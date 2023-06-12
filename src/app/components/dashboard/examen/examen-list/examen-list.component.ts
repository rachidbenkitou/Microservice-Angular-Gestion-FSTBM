import {Component, OnInit} from '@angular/core';
import {Examen} from "../../../../Entities/Examen";
import {ExamenServiceService} from "../../../../services/examen-service.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-examen-list',
  templateUrl: './examen-list.component.html',
  styleUrls: ['./examen-list.component.scss']
})
export class ExamenListComponent  implements  OnInit{
   examenList: Array<Examen>= new Array<Examen>();
  searchFormGroup!: FormGroup
  // token !: string
  // httpOptions !: any
  //
  //

   constructor(private examenServ : ExamenServiceService,public router:Router, private fb: FormBuilder) {
   }

    ngOnInit(): void {
  //   this.token = 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWN1cml0eS1zZXJ2aWNlIiwic3ViIjoiYWRtaW5AZ21haWwuY29tIiwiZXhwIjoxNjgzOTAxNjM0LCJpYXQiOjE2ODM5MDEzMzQsInNjb3BlIjoiQURNSU4ifQ.aJqYfmYVeC2AgqH1tTEzNmvvlTidSuNku-a4um-fb4NGXlFMdjadmpAQR4vfFUovvIvElqYcVHHzZrczGRkfi9rPzpvwDkCfE62UcEiEcidZoL2I4rssi_huC3TGSmrDtNySFMJ1yhyPRXy1_KWMZWMEqSK-0Luu6Pz4IuN9GcB1z6M0409MBuo3boUCKbROiRAf6nd9ck5FYEjKxCDdPBqLIJlkzUyAImtk4Aaf9jyitJqAgf3P_c99W7e4RQvZ9q5l6ORHo2ieUaMIkzy21ZrTgccmN_246Me5ECMqNeNTur5pqc4o-TWcEciJ0EcWOxRXX_AGpjhBcIwHIBQfQg'; // votre token JWT
  //    this.httpOptions = {
  //     headers: new HttpHeaders({
  //       'Authorization': `Bearer ${this.token}`
  //     })
  //   };
      this.searchFormGroup= this.fb.group({
      keyword1 : this.fb.control(null),
      keyword2 : this.fb.control(null)
    })


     this.examenServ.getallExamens()
                  .subscribe({
                         next : (data)=>{
                        this.examenList = data;
                                 },
                        error : (err)=>{
                        console.log("err");
                                     }
  });
  }

onEditExamen(id:number){
   this.router.navigate(['dashboard/ADMIN/examens/edit',id]);
  }

  handelDeleteExamen(examen : Examen){
     this.examenServ.deleteExamen(examen.id).subscribe({
       next : (data)=>{
          const index = this.examenList.indexOf(examen);
        if (index >= 0) {
        this.examenList.splice(index, 1);
      }
         console.log("examen est supprimé");
                                 },}
     )
  }
  handelSearch() {

     const key1 = this.searchFormGroup.get('keyword1')?.value;
    const key2 = this.searchFormGroup.get('keyword2')?.value;
    this.examenServ.searchExamen(key1,key2).subscribe({
      next : (data) => {
        this.examenList = data


      }
    })
  }
gotolist(){
    if (this.searchFormGroup.get('keyword1')?.value =="" && this.searchFormGroup.get('keyword2')?.value=="") {
       this.examenServ.getallExamens()
                  .subscribe({
                         next : (data)=>{
                        this.examenList = data;
                                 },
                        error : (err)=>{
                        console.log("err");
                                     }
  });
    }else {
      this.handelSearch()
    }
}
}

