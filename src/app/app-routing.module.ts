import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EtudiantsFormComponent } from './dashboard/etudiants/etudiants-form/etudiants-form.component';
import { EtudiantsListComponent } from './dashboard/etudiants/etudiants-list/etudiants-list.component';
import { EtudiantsComponent } from './dashboard/etudiants/etudiants.component';
import { FiliereFormComponent } from './dashboard/filieres/filiere-form/filiere-form.component';
import { FiliereListComponent } from './dashboard/filieres/filiere-list/filiere-list.component';
import { FilieresComponent } from './dashboard/filieres/filieres.component';

import { MainComponent } from './dashboard/main/main.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, }, @TODO: Add Home Component
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: '', component: MainComponent,
        
      },
      {
        path: 'etudiants', component: EtudiantsComponent,
        children: [
          {
            path: '', component: EtudiantsListComponent,
          },
          {
            path: 'add', component: EtudiantsFormComponent,
          },
          {
            path: 'edit/:id', component: EtudiantsFormComponent,
          }
        ]
      },
      {
        path: 'filieres', component: FilieresComponent,
        children: [
          {
            path: '', component: FiliereListComponent,
          },
          {
            path: 'add', component: FiliereFormComponent,
          },
          {
            path: 'edit/:id', component: FiliereFormComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
