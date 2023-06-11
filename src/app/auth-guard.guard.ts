import { LoginService } from './services/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private loginService:LoginService, private route:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     

      if(this.loginService.isLoggedIn()){
        const path=route.url[0].path
        const scope=this.loginService.getScopes()
        console.log(path)

        if(path.includes(scope))
        return true;

        else   {
          
          this.route.navigateByUrl(`/dashboard/${scope}`)
          return true;
        }

      }else{
        this.route.navigateByUrl(`/login`)
      }
    
    return false;
  }

  isAdmin():boolean{
    return this.loginService.getScopes().includes("ADMIN") 

  }

  isTeacher():boolean{
    return this.loginService.getScopes().includes('ENSEIGNANT')

  }

  isStudent():boolean{
    return this.loginService.getScopes().includes('ETUDIANT')
  }
  
}
