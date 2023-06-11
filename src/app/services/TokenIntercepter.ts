import { ConnexionResponse } from './../models/connexionResponse';
import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, } from "@angular/common/http";
import { BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
    providedIn:'root'
})

export class TokenIntercepter implements HttpInterceptor{
    isTokenRefreshing = false;
    refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(private loginService:LoginService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("intercept")
        if ( req.url.indexOf('token') !== -1) {
            return next.handle(req);
        }
       const jwtToken = this.loginService.getJwtToken();
      
       if (jwtToken) {
        console.log("jwt exist")
        return next.handle(this.addToken(req, jwtToken)).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse
                && error.status === 403) {
                  // this.toaster.error('failed')
                  console.log('hii');
                return this.handleAuthErrors(req, next);
            } else {
              console.log('hii');
                return throwError(error);
            }
        }));
    }
    return next.handle(req);
    }

    private handleAuthErrors(req: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {
            console.log("handle")
        if (!this.isTokenRefreshing) {
            this.isTokenRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this.loginService.refrechToken().pipe(
                switchMap((refreshTokenResponse: ConnexionResponse) => {
                    this.isTokenRefreshing = false;
                    this.refreshTokenSubject
                        .next(refreshTokenResponse.accessToken);
                    return next.handle(this.addToken(req,
                        refreshTokenResponse.accessToken));
                })
            )
        } else {
            return this.refreshTokenSubject.pipe(
                filter(result => result !== null),
                take(1),
                switchMap((res) => {
                    return next.handle(this.addToken(req,
                        this.loginService.getJwtToken()))
                })
            );
        }
    }

    addToken(req: HttpRequest<any>, jwtToken: any) {
        console.log("add jwt")
        return req.clone({
            headers: req.headers.set('AUTHORIZATION',
                'Bearer ' + jwtToken)
        });
    }
}
