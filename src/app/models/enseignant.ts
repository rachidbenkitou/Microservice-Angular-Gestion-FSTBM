import { departement } from "./departement";

export interface enseignant{
	 id:number
     nom:string;
	 prenom:string;
	 adresse:string;
	 email:string;
	 password:string;
	 cin:string;
	 departement:departement;
}