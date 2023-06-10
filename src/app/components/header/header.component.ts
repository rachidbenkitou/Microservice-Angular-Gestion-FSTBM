import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isLoggedIn: boolean=false;
  scope:string='';

  constructor(private loginService:LoginService,private router: Router){}
  ngOnInit(): void {
    this.isLoggedIn=this.loginService.isLoggedIn()

    if(this.isLoggedIn) this.scope=this.loginService.getScopes();
  }

  dashboard(scope:string){
    this.router.navigateByUrl(`dashboard/${scope}`)
  }


}
