import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filiere } from 'src/app/models/Filiere';
import { Niveau } from 'src/app/models/Niveau';
import { FiliereService } from 'src/app/services/filiere.service';

@Component({
  selector: 'app-filiere-form',
  templateUrl: './filiere-form.component.html',
  styleUrls: ['./filiere-form.component.scss']
})
export class FiliereFormComponent implements OnInit {

  @Input() filiere: Filiere = {};
  mode: string | undefined;

  constructor(private filereService: FiliereService, private router: Router, private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    const path =this.activateRoute.snapshot.routeConfig?.path;
    this.mode = path?.includes("edit") ? "edit": path?.includes("add") ? "add" : undefined;

    if (this.mode === "edit") {
      this.getFiliereById(id);
    }
  }

  addFiliere(filiere: Filiere) {
    this.filereService.createFiliere(filiere).subscribe((data: {}) => {
      this.router.navigate(['dashboard/filieres']);
    });
  }

  updateFiliere(filiere: Filiere) {
    if (!this.filiere?.idFiliere) {
      throw new Error('Filiere id is null');
    }
    this.filereService.updateFiliere(filiere).subscribe((data: {}) => {
      this.router.navigate(['dashboard/filieres']);
    });
  }

  getFiliereById(id: string) {
    this.filereService.getFiliereById(id).subscribe((data: {}) => {
      this.filiere = data;
    });
  }

  cancel() {
    this.router.navigate(['dashboard/filieres']);
  }

  submit() {
    if (this.mode === "edit") {
      this.updateFiliere(this.filiere);
    }
    if (this.mode === "add") {
      this.addFiliere(this.filiere);
    }
  }

  getNiveaux() {
    return Object.values(Niveau);
  }
}
