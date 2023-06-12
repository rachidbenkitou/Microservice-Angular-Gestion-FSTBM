import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Etudiant} from "../models/Etudiant";
import {Module} from "../Entities/Module";
<<<<<<< HEAD
=======
import {Inscription} from "../models/Inscription";
>>>>>>> fcedd6ac6e8e7b3509d0cee813b4eec1626923b6

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  //data based url
  private serverUrl : string = 'http://localhost:8222/etudiant-service/api/v1/Etudiants';
<<<<<<< HEAD
=======
  private serverUrl_2 : string = 'http://localhost:8222/etudiant-service/api/v1/inscriptions/cin';
>>>>>>> fcedd6ac6e8e7b3509d0cee813b4eec1626923b6

  //injecter HttpClient
  constructor(private httpClient: HttpClient) { }

  //get all Etudiant from DB


  public getEtudiants(): Observable<Etudiant[]> {
    return this.httpClient.get<Etudiant[]>(`${this.serverUrl}`).pipe(
      catchError(this.handleError)
    );
  }
  //get  Etudiant by id
  getEtudiantByid(id: string): Observable<Etudiant> {
    const url = `${this.serverUrl}/id/${id}`;
    return this.httpClient.get<Etudiant>(url).pipe(
      catchError(this.handleError)
    );
  }

<<<<<<< HEAD
  //get  Etudiant by cin
  getEtudiantByCin(cin: string ): Observable<Etudiant> {
    const url = `${this.serverUrl}/cin/${cin}`;
    return this.httpClient.get<Etudiant>(url).pipe(
=======
  //get Etudiant by cin
  getEtudiantByCin(cin: string ): Observable<Etudiant[]> {
    const url = `${this.serverUrl}/cin/${cin}`;
    return this.httpClient.get<Etudiant[]>(url).pipe(
      catchError(this.handleError)
    );
  }
  //get Etudiant Info by cin
  getEtudiantInfoByCin(cin: string ): Observable<Inscription> {
    const url = `${this.serverUrl_2}/${cin}`;
    return this.httpClient.get<Inscription>(url).pipe(
>>>>>>> fcedd6ac6e8e7b3509d0cee813b4eec1626923b6
      catchError(this.handleError)
    );
  }
  //get  Etudiant by cin
  getEtudiantByApogee(apogee: string ): Observable<Etudiant[]> {
    const url = `${this.serverUrl}/apogee/${apogee}`;
    return this.httpClient.get<Etudiant[]>(url).pipe(
      catchError(this.handleError)
    );
  }
<<<<<<< HEAD
=======

  getEtudiantByFilierId(idFilier:string){
    return this.httpClient.get<Etudiant[]>(`${this.serverUrl}/filier/${idFilier}`);
  }
>>>>>>> fcedd6ac6e8e7b3509d0cee813b4eec1626923b6
  //Save Etudiant
  saveEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.httpClient.post<Etudiant>(this.serverUrl, etudiant).pipe(
      catchError(this.handleError)
    );
  }

  //Updating etudaint
  updateEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.httpClient.put<Etudiant>(this.serverUrl,etudiant ).pipe(
      catchError(this.handleError)
    );
  }

  //Deleting etudaint
  deleteEtudiant(id: string): Observable<any> {
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
