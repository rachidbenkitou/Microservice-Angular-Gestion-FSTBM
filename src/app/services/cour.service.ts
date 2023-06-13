import { Module } from 'src/app/Entities/Module';
import { HttpHeaders } from '@angular/common/http';
import { Cour } from './../models/cour';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headers = new HttpHeaders(
  {
  'Content-Type': 'application/json'
});
@Injectable({
  providedIn: 'root'
})
export class CourService {
  private baseUrl:string='http://localhost:8222'
  private apiUrl={
    departement:'departement',
    user:'users',
    enseignant:'enseignant',
    cour:'cour'
  };
  private serviceName={
    enseignantService:'enseigant-service/api/v1',
    securiryServiceL:'security-service'

  }
  constructor(private http: HttpClient) { }

  saveCour(cin:string,cour:Cour){
    return this.http.post(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.cour}/add/${cin}`,JSON.stringify(cour),{ headers: headers } )
  }

  updateCour(idCour:number,cour:Cour){
    return this.http.put<Cour>(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.cour}/update/id/${idCour}`,JSON.stringify(cour))
  }

  getAllcour(){
    return this.http.get<Cour[]>(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.cour}/allSortByDateUpdate?page=0&nbrElement=10`)
  }

  getCourByIntituleLike(intitule:string){
    return this.http.get<Cour[]>(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.cour}/search/intitile?page=1&nbrElement=10`)
  }

  getCourByEnseignantCin(cin:string){
    return this.http.get<Cour>(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.cour}/enseignant/cin/${cin}`)
  }

  uploadFile(idCour:number,dataform:FormData){
    return this.http.post(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.cour}/uploadDocument/id/${idCour}`,dataform)
  }
  
  download(id:number){
     return this.http.get(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.cour}/downloadDodument/${id}`,
     { responseType: 'blob', headers: new HttpHeaders({ 'Content-Type': 'application/pdf' }) }
     )
  }

  getById(id:number){
    return this.http.get<Cour>(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.cour}/id/${id}`)
  }

  searchByIntitule(intitule:string){

    return this.http.get<Cour[]>(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.cour}/search/intitile/${intitule}`)
  }

  getModuleByEnseignantCin(cin:string){
    return this.http.get<Module>(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.cour}/module/enseignant/${cin}`)

  }

  deleteById(id:number){
    return this.http.delete(`${this.baseUrl}/${this.serviceName.enseignantService}/${this.apiUrl.cour}/delete/id/${id}`)

  }

}
