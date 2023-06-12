import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Etudiant} from "../models/Etudiant";
import {catchError} from "rxjs/operators";
import {Inscription} from "../models/Inscription";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  //data based url
  private serverUrl : string = 'http://localhost:8222/etudiant-service/api/v1/inscriptions';

  //injecter HttpClient
  constructor(private httpClient: HttpClient) { }

  //get all Etudiant from DB


  public getInsciptions(): Observable<Inscription[]> {
    return this.httpClient.get<Inscription[]>(`${this.serverUrl}`).pipe(
      catchError(this.handleError)
    );
  }
  //get  Inscription by id
  getInscriptionByid(id: string): Observable<Inscription> {
    const url = `${this.serverUrl}/${id}`;
    return this.httpClient.get<Inscription>(url).pipe(
      catchError(this.handleError)
    );
  }

  //get  Inscription by cin
  getInscriptionByCin(cin: string ): Observable<Inscription[]> {
    const url = `${this.serverUrl}/cin/${cin}`;
    return this.httpClient.get<Inscription[]>(url).pipe(
      catchError(this.handleError)
    );
  }
  //Save Inscription
  saveInscription(inscription: Inscription): Observable<Inscription> {
    return this.httpClient.post<Inscription>(this.serverUrl, inscription).pipe(
      catchError(this.handleError)
    );
  }

  //Updating Inscription
  updateInscription(inscription: Inscription): Observable<Inscription> {
    return this.httpClient.put<Inscription>(this.serverUrl,inscription ).pipe(
      catchError(this.handleError)
    );
  }

  //Deleting Inscription
  deleteInscription(id: string): Observable<any> {
    const url = `${this.serverUrl}/${id}`;
    return this.httpClient.delete(url).pipe(
      catchError(this.handleError)
    );
  }
  // Errors Handling
  public handleError(error: HttpErrorResponse){
    let errorMessage: string = '';
    if(error.error instanceof ErrorEvent){
      //client error
      errorMessage = `Error : ${error.error.message}`;
    }else{
      //server error
      errorMessage = `Status : ${error.status}` +"......" +` Message : ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
