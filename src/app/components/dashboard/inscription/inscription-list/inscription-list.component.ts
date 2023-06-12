import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Inscription} from "../../../../models/Inscription";
import {InscriptionService} from "../../../../services/inscription.service";


@Component({
  selector: 'app-inscription-list',
  templateUrl: './inscription-list.component.html',
  styleUrls: ['./inscription-list.component.scss']
})
export class InscriptionListComponent {
  public inscriptionList: Array<Inscription>= new Array<Inscription>();
  public errors!: Error;

  constructor(private inscriptionService: InscriptionService, private router: Router) {
  }
  ngOnInit(): void {
    this.getListInscriptions();
  }

  public getListInscriptions(): void {
    this.inscriptionService.getInsciptions().subscribe(
      (data) => {
        this.inscriptionList = data;
        console.log(data);
      },
      (error) => {
        this.errors = error
      }
    );
  }
  public editInscription(id?: string) {
    if (!id) {
      throw new Error('inscription id is null');
    }
    this.router.navigate(['dashboard/inscriptions/edit/' + id]);

  }
  handleDelete(id: string) {
    this.inscriptionService.deleteInscription(id).subscribe(
      (data) => {
        // Supprimer l'étudiant de la liste côté frontend
        this.inscriptionList = this.inscriptionList.filter(insciption => insciption.idInscription !== id);
      },
      (error) => {
        this.errors = error;
      }
    );
  }
}
