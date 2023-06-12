import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', './../../../assets/plugins/bootstrap/css/bootstrap.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class  DashboardComponent {

  constructor(private loginService:LoginService,private route:Router){}

  ngOnInit() {

  }

  logOut(){
    console.log("logout")
    this.loginService.logout();
    this.route.navigateByUrl("/login")

  }
}
