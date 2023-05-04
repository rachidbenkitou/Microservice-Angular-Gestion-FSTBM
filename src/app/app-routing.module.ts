import { HomeComponent } from './components/home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CourFormComponent } from './dashboard/cours/cour-form/cour-form.component';
import { CourListComponent } from './dashboard/cours/cour-list/cour-list.component';
import { CoursComponent } from './dashboard/cours/cours.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartementFormComponent } from './dashboard/departements/departement-form/departement-form.component';
import { DepartementListComponent } from './dashboard/departements/departement-list/departement-list.component';
import { DepartementsComponent } from './dashboard/departements/departements.component';
import { EnseignentFormComponent } from './dashboard/enseignents/enseignent-form/enseignent-form.component';
import { EnseignentListComponent } from './dashboard/enseignents/enseignent-list/enseignent-list.component';
import { EnseignentsComponent } from './dashboard/enseignents/enseignents.component';

import { EtudiantsFormComponent } from './dashboard/etudiants/etudiants-form/etudiants-form.component';
import { EtudiantsListComponent } from './dashboard/etudiants/etudiants-list/etudiants-list.component';
import { EtudiantsComponent } from './dashboard/etudiants/etudiants.component';
import { FiliereFormComponent } from './dashboard/filieres/filiere-form/filiere-form.component';
import { FiliereListComponent } from './dashboard/filieres/filiere-list/filiere-list.component';
import { FilieresComponent } from './dashboard/filieres/filieres.component';

import { MainComponent } from './dashboard/main/main.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { DepartementComponent } from './components/departement/departement.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, }, @TODO: Add Home Component
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'etudiants',
        component: EtudiantsComponent,
        children: [
          {
            path: '',
            component: EtudiantsListComponent,
          },
          {
            path: 'add',
            component: EtudiantsFormComponent,
          },
          {
            path: 'edit/:id',
            component: EtudiantsFormComponent,
          },
        ],
      },
      {
        path: 'filieres',
        component: FilieresComponent,
        children: [
          {
            path: '',
            component: FiliereListComponent,
          },
          {
            path: 'add',
            component: FiliereFormComponent,
          },
          {
            path: 'edit/:id',
            component: FiliereFormComponent,
          },
        ],
      },
      {
        path: 'enseignents',
        component: EnseignentsComponent,
        children: [
          {
            path: '',
            component: EnseignentListComponent,
          },
          {
            path: 'add',
            component: EnseignentFormComponent,
          },
          {
            path: 'edit/:id',
            component: EnseignentFormComponent,
          },
        ],
      },
      {
        path: 'departements',
        component: DepartementsComponent,
        children: [
          {
            path: '',
            component: DepartementListComponent,
          },
          {
            path: 'add',
            component: DepartementFormComponent,
          },
          {
            path: 'edit/:id',
            component: DepartementFormComponent,
          },
        ],
      },
      {
        path: 'cours',
        component: CoursComponent,
        children: [
          {
            path: '',
            component: CourListComponent,
          },
          {
            path: 'add',
            component: CourFormComponent,
          },
          {

            path: 'edit/:id',
            component: CourFormComponent,
          },
        ],
      },
    ],
  },
  {
    path:'',component:HomeComponent
  },
  {
    path:'departement',component:DepartementComponent
  },
  {
    path:'enseignant',component:EnseignantComponent
  },
  {
    path:'login',component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
