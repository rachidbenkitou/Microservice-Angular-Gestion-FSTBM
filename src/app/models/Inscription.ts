import {Filiere} from "./Filiere";
import {Etudiant} from "./Etudiant";

export interface Inscription {
  idInscription?: string;
  dateInscripton?: Date;
  idFilier: string;
  cin: string;
}
