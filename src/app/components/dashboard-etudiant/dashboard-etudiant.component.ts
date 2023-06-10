import { LoginService } from './../../services/login.service';
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dashboard-etudiant',
  templateUrl: './dashboard-etudiant.component.html',
  styleUrls: ['./dashboard-etudiant.component.scss','./../../../assets/plugins/bootstrap/css/bootstrap.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardEtudiantComponent {
  constructor(private loginService:LoginService){}

  ngOnInit() {

  }

  logOut(){
    this.loginService.logout();
  }
}
