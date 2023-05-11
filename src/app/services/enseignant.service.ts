import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { departement } from '../models/departement';
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
    return this.http.get<departement[]>(`${this.baseUrl}/${this.serviceName}/${this.apiUrl}/all`)
  }

  getByName(name:string){
    return this.http.get<departement>(`${this.baseUrl}/${this.serviceName}/${this.apiUrl}/name/${name}`)

  }

  deleteById(id:number){
    return this.http.delete(`${this.baseUrl}/${this.serviceName}/${this.apiUrl}/delete/id/${id}`)

  }

  getDepartementNames(){
    return this.http.get<string[]>(`${this.baseUrl}/${this.serviceName}/${this.apiUrl}/name/all`)

  }
  



}