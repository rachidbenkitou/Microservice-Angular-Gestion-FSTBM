import { LoginService } from './../../../services/login.service';
import { Component } from '@angular/core';
import {Etudiant} from "../../../models/Etudiant";
import {EtudiantService} from "../../../services/etudiant.service";
import {Router} from "@angular/router";
import {Inscription} from "../../../models/Inscription";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  public inscription!: Inscription;
  public errors!: Error;
  public cin: string='' ;

  constructor(private etudaintService: EtudiantService, private router: Router,private loginService:LoginService) {
  }
  ngOnInit(): void {
    this.getEtudiantInfo();
    this.cin=this.loginService.getCin();
  }

  //get Etudiant Info by cin
  public getEtudiantInfo(): void {
    this.etudaintService.getEtudiantInfoByCin(this.cin).subscribe(
      (data) => {
        this.inscription = data;
        console.log(this.inscription)
      },
      (error) => {
        this.errors = error
      }
    );
  }
}
