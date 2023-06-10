import { Component } from '@angular/core';
import {Etudiant} from "../../../../models/Etudiant";
import {EtudiantService} from "../../../../services/etudiant.service";
import {Router} from "@angular/router";
import {Subscriber} from "rxjs";
import {Module} from "../../../../Entities/Module";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-etudiants-list',
  templateUrl: './etudiants-list.component.html',
  styleUrls: ['./etudiants-list.component.scss']
})
export class EtudiantsListComponent {
  public etudaintList: Array<Etudiant>= new Array<Etudiant>();
  public errors!: Error;

  constructor(private etudaintService: EtudiantService, private router: Router) {
  }
  ngOnInit(): void {
    this.getListEtudaint();
  }

  public getListEtudaint(): void {
    this.etudaintService.getEtudiants().subscribe(
      (data) => {
        this.etudaintList = data;
      },
      (error) => {
        this.errors = error
      }
    );
  }
  public editEtudiant(id?: string) {
    if (!id) {
      throw new Error('Etudaint id is null');
    }
    this.router.navigate(['dashboard/ADMIN/etudiants/edit/' + id]);

  }
    handleDelete(id: string) {
    this.etudaintService.deleteEtudiant(id).subscribe(
      (data) => {
        // Supprimer l'étudiant de la liste côté frontend
        this.etudaintList = this.etudaintList.filter(etudaint => etudaint.id !== id);
      },
      (error) => {
        this.errors = error;
      }
    );
  }
}
