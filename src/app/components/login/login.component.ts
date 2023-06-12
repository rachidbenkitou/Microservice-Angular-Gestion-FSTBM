import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Connexion } from './../../models/connexion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  connexion:Connexion={
    username:'',
    password:'',
    grantType:'password',
    withRefreshToken:true
  }

  // listEmails : Connexion[];
  // isExists : boolean;
  // emailNonVerifier : string='';

  inscriptionMsg: string='';
  isError: boolean=false;
  login = new FormGroup({
    email : new FormControl('',
                                [
                                  Validators.required,
                                  Validators.email
                                ]),
    password : new FormControl('',
                                [
                                  Validators.required,
                                  Validators.minLength(8)
                                ])
  })
//  getters
  get password(){
    return this.login.get('password');
  }

  constructor(private inscriptionService:LoginService,private router:Router,
              private toastr:ToastrService,private activateRoute:ActivatedRoute) {

   }

  ngOnInit(): void {

    this.activateRoute.queryParams.subscribe
    (params => {
      if(params['registered'] !== '' && params['registered']==='true') {
        this.toastr.success('inscription réussite');
        this.inscriptionMsg ='vous pouvez consultez votre email pour activer votre compte'
      }else{
      }
    })
  
  }



  Connexion(){
  

    this.inscriptionService.Connexion(this.connexion).subscribe(data=>{

        this.isError=false;
        this.router.navigateByUrl(`/`);
        this.toastr.success('connexion reussite');
      },
      error =>
      {
        this.isError = true;
        this.toastr.error('connexion echoué');
        
      });
    }

   
}

