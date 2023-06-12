import { User } from 'src/app/models/user';
import { enseignant } from './../models/enseignant';
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

  private baseUrl:string='http://localhost:8222'
  private apiUrl={
    departement:'departement',
    user:'users',
    enseignant:'enseignant'
  };
  private serviceName={
    enseignantService:'enseigant-service/api/v1',
    securiryServiceL:'security-service'

  }
  constructor(private http: HttpClient) { }


  saveDepartement(nameDeparetement:string){

    return this.http.post(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.departement}/add`,JSON.stringify(nameDeparetement) ,{ headers: headers })
  }

  getAll(){
    return this.http.get<departement[]>(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.departement}/all`)
  }

  getByName(name:string){
    return this.http.get<departement>(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.departement}/name/${name}`)

  }

  deleteDepartementById(id:number){
    return this.http.delete(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.departement}/delete/id/${id}`)

  }

  getDepartementNames(){
    return this.http.get<string[]>(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.departement}/name/all`)
  }
  
  insertEnseignant(enseignant:enseignant){
    return this.http.post(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.enseignant}/add`,enseignant)
  }

  insertUser(user:User){
    return this.http.post(`${this.baseUrl}/${this.serviceName.securiryServiceL}/${this.apiUrl.user}`,user)
  }

  getAllEnseignant(){
    return this.http.get<enseignant[]>(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.enseignant}/all`)
  }

  deleteEnseignantById(id:number){
    return this.http.delete(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.enseignant}/delete/id/${id}`)

  }

  getEnseignantByCIN(cin:string){
    console.log(cin)
    return this.http.get<enseignant>(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.enseignant}/cin/${cin}`)
  }

  
  getEnseignantByDepartement(departement:string){
    console.log(departement)
    return this.http.get<enseignant[]>(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.departement}/profsByname/${departement}`)
  }



}