import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Filiere } from 'src/app/models/Filiere';
import { FiliereService } from 'src/app/services/filiere.service';

@Component({
  selector: 'app-filiere-list',
  templateUrl: './filiere-list.component.html',
  styleUrls: ['./filiere-list.component.scss']
})
export class FiliereListComponent {
  filiereList: Array<Filiere> = [];

  constructor(private filereService: FiliereService, public router: Router) {}

  ngOnInit(): void {
    console.log("init list filier")
    this.getListFiliere();
  }

  deleteFiliere(id?: string) {
    if (!id) {
      throw new Error('Filiere id is null');
    }
    if (window.confirm('Are you sure?')) {
      this.filereService.deleteFiliere(id).subscribe((data: {}) => {
        this.router.navigate(['dashboard/ADMIN/filieres']);
      });
    } 
  }

  getListFiliere() {
    this.filereService.getAllFilieres().subscribe((data) => {
      this.filiereList = data;
    });
  }

  editFiliere(id?: string) {
    if (!id) {
      throw new Error('Filiere id is null');
    }
    this.router.navigate(['dashboard/ADMIN/filieres/edit/' + id]);
  }

}
