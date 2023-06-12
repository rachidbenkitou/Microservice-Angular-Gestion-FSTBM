import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { GET_BASE_URL, HTTP_OPTIONS, STUDENT_BE_APIS, STUDENT_BE_SERVICE } from '../config';
import { Filiere } from '../models/Filiere';
import {Inscription} from "../models/Inscription";

@Injectable({
  providedIn: 'root'
})
export class FiliereService {


  constructor(private http: HttpClient) {}

  //private API_URL = `${GET_BASE_URL(STUDENT_BE_SERVICE)}/${STUDENT_BE_APIS.FILIERES}/`;
  private API_URL = "http://localhost:8222/etudiant-service/api/v1/filiers/"

  getAllFilieres(): Observable<Filiere[]> {
    console.log(this.API_URL)
    return this.http
      .get<Filiere[]>(this.API_URL)
      .pipe(retry(1), catchError(this.handleError));
  }

  getFiliereById(id: string): Observable<Filiere> {
    const url = `${this.API_URL}/id/${id}`;
    return this.http
      .get<Filiere>(url)
      .pipe( catchError(this.handleError));
  }
  getFiliereByName(name: string ): Observable<Filiere> {
    const url = `${this.API_URL}/name/${name}`;
    return this.http.get<Filiere>(url).pipe(
      catchError(this.handleError)
    );
  }
  createFiliere(filiere: Filiere): Observable<Filiere> {
    return this.http
      .post<Filiere>(
        this.API_URL,
        JSON.stringify(filiere),
        HTTP_OPTIONS
      )
      .pipe(retry(1), catchError(this.handleError));
  }


  updateFiliere(filiere: Filiere): Observable<Filiere> {
    console.log(`${this.API_URL}id/${filiere.id}`)
    return this.http
      .put<Filiere>(
        `${this.API_URL}id/${filiere.id}`,
        JSON.stringify(filiere),
        HTTP_OPTIONS
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteFiliere(id: string): Observable<Filiere> {
    return this.http
      .delete<Filiere>(this.API_URL + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
