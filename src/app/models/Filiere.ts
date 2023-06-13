import { Inscription } from "./Inscription";
import { Niveau } from "./Niveau";

export interface Filiere {
  id: string;
  name: string;
  niveau?: Niveau;
  inscriptions?: Inscription[];

}
