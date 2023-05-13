import { Inscription } from "./Inscription";
import { Niveau } from "./Niveau";

export interface Filiere {
  idFiliere?: string;
  name?: string;
  niveau?: Niveau;
  inscriptions?: Inscription[];
}
