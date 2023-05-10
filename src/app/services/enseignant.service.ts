import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});
@Injectable({
  providedIn: 'root'
})

export class EnseignantService {

  baseUrl:string='http://localhost:8222'
  apiUrl:string='departement';
  serviceName:string='api/enseignant-service'
  constructor(private http: HttpClient) { }


  saveDepartement(nameDeparetement:string){

    return this.http.post(`${this.baseUrl}/${this.serviceName}/${this.apiUrl}/add`,JSON.stringify(nameDeparetement) ,{ headers: headers })
  }

  getAll(){
    return this.http.get(`${this.baseUrl}/${this.serviceName}/${this.apiUrl}/all`)
  }



}