import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Examen } from 'src/app/Entities/Examen';
import { Note, NoteKey } from 'src/app/models/Note';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { ExamenServiceService } from 'src/app/services/examen-service.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-ajout-form',
  templateUrl: './note-ajout-form.component.html',
  styleUrls: ['./note-ajout-form.component.scss']
})
export class NoteAjoutFormComponent {
  formGroup !: FormGroup
  examen !: Examen
  examens !: Array<Examen>
  etudiant!:any
  note !: Number
  varia !: any
  idEtudiant!:any;
  constructor(private fb: FormBuilder, private router: Router, private examenServ: ExamenServiceService, 
    private etudService: EtudiantService, private routee: ActivatedRoute, private noteService: NoteService) {

  }

  ngOnInit(): void {
    this.examenServ.getallExamens().subscribe({
      next: (data) => {
        this.examens = data;
      }
    });

    this.formGroup = this.fb.group({
      exam_h: this.fb.control(null, [Validators.required]),
      note_h: this.fb.control(null, [Validators.required])
    })


    this.routee.paramMap.subscribe(params => {
      this.idEtudiant = params.get('id');
    });

    this.etudService.getEtudiantByid(this.idEtudiant).subscribe({
      next: (data) => {
        this.etudiant = data;
      }
    });

  }


  handleAddNote() {

    const noteValue = this.formGroup.get('note_h')?.value;
    const examenValue = this.formGroup.get('exam_h')?.value;

    const key: NoteKey = new NoteKey();
    const note: Note= new Note();

    key.etudiantId=this.idEtudiant
    key.examenId=examenValue

    
    note.note=noteValue
    note.etudiantApogee=this.etudiant.apogee;
    note.etudiantCin=this.etudiant.cin;
    note.id=key

    this.noteService.saveExamen(note).subscribe({
      next: (data) => {
        this.router.navigateByUrl("dashboard/ENSEIGNANT/etudiants")
      }
    });

  }

  goEtudiantList(){
    this.router.navigateByUrl("dashboard/ENSEIGNANT/etudiants")
  }

  getErrorMessag(name: string, errors: ValidationErrors) {
    if (errors['required']) {

      return name + ' is required';
    }
    else return ""

  }
}
