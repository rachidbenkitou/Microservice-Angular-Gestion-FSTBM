import {Filiere} from "./Filiere";
import {Etudiant} from "./Etudiant";

export interface Inscription {
  idInscription: string;
  dateInscription: Date;
  filiere: Filiere;
  etudiant: Etudiant;
}
