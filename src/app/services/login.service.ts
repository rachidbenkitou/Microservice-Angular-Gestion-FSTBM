import { ConnexionResponse } from './../models/connexionResponse';
import { Connexion } from './../models/connexion';
import { map, Observable, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Inscription } from '../models/Inscription';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() email: EventEmitter<string> = new EventEmitter();


  refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    username: this.getEmail(),
    grantType:"refreshToken",


  }

  urlApi= 'http://localhost:8222/security-service';

  constructor(private http : HttpClient, private localStorage:LocalStorageService) { }

  ListEmailsNonVerifier():Observable<any>{
    return this.http.get<Connexion>(`${this.urlApi}/unverified`);
  }

  // inscription

  Inscription(inscription : Inscription):Observable<any>{
    const response:object={
      responseType:'text'
    }
    return this.http.post<Inscription>(`${this.urlApi}/signup`,inscription, response);
  // response Type: text ?
  }

  // connexion
  Connexion(connexion : Connexion):Observable<boolean>{
    console.log(connexion)
    var res = this.http.post<ConnexionResponse>(`${this.urlApi}/token`, connexion)
    .pipe(map(
      data => {
        
        this.localStorage.store('accessToken', data.accessToken);
        this.localStorage.store('email', data.username);
        this.localStorage.store('refreshToken', data.refreshToken);
        this.localStorage.store('cin', data.cin);
        this.localStorage.store('scope', this.DecoderScopeFromJwt(data.accessToken));

        this.loggedIn.emit(true);
        this.email.emit(data.username);

        return true;
      }
    ));
    return res;
  }

  DecoderScopeFromJwt(jwtToken:any):string | string[]{
    const decodedToken: any = jwt_decode(jwtToken);
    const scopes: string | string[] = decodedToken['scope'];

    console.log(scopes)
    return scopes
  }



  getJwtToken() {
    return this.localStorage.retrieve('accessToken');
  }

  getScopes():string {
    return this.localStorage.retrieve('scope')
  }

  refrechToken() {
    return this.http.post<ConnexionResponse>(`${this.urlApi}/token`,
    this.refreshTokenPayload)
    .pipe(tap(response => {
      console.log("refresh")
      this.localStorage.clear('accessToken');
      this.localStorage.clear('expiresAt');

      this.localStorage.store('accessToken',
        response.accessToken);
      this.localStorage.store('expiresAt', response.expiresAt);
    }));
  }

  getCin():string{
    return this.localStorage.retrieve('cin')

  }

  logout() {
    
    this.localStorage.clear('accessToken');
    this.localStorage.clear('email');
    this.localStorage.clear('refreshToken');
    this.localStorage.clear('scope');
  }

  getEmail() {
    return this.localStorage.retrieve('email');
  }
  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }
}
