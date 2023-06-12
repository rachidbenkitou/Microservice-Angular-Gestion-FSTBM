import {Examen} from "../Entities/Examen";
import {Etudiant} from "./Etudiant";

export class NoteKey{
  etudiantId !: string;
  examenId !: number;
}
export class Note{
  id !: NoteKey ;
  note !: number;
  oldNote !: number;
  mention !: string;
  examen !: Examen;
  etudiant !: Etudiant;
}
