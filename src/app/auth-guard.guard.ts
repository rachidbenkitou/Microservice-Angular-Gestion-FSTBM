import { LoginService } from './services/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private loginService:LoginService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.loginService.isLoggedIn()){

        if(this.isAdmin()){
          this.router.navigateByUrl('/auth/login');
        }else
        if(this.isStudent()){

        }
        else
        if(this.isTeacher()){

        }

      }else{
        this.router.navigateByUrl('/auth/login');

      }
    
    return true;
  }

  isAdmin():boolean{
    return this.loginService.getScopes()=='ADMIN'

  }

  isTeacher():boolean{
    return this.loginService.getScopes()=='TEACHER'

  }

  isStudent():boolean{
    return this.loginService.getScopes()=='STUDENT'
  }
  
}
