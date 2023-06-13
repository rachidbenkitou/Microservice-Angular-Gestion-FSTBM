import { NoteKey } from "../models/Note";

export class Note {
    id!: NoteKey; //id etudiant + id examen
    note!: Number;
    oldNote!: Number;
    etudiantApogee!: Number;
    etudiantCin!: String;
}