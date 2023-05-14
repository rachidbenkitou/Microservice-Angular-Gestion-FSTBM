import {Niveau} from "./Niveau";
import {Inscription} from "./Inscription";

export interface Filiere {
  idFiliere: string;
  name: string;
  niveau: Niveau;
  inscriptions: Inscription[];
}
