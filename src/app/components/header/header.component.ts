import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isLoggedIn: boolean=false;

  constructor(private loginService:LoginService){}
  ngOnInit(): void {
    this.isLoggedIn=this.loginService.isLoggedIn()

  }


}
