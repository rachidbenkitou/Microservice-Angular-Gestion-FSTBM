import { HomeComponent } from './components/home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EtudiantsFormComponent } from './dashboard/etudiants/etudiants-form/etudiants-form.component';
import { EtudiantsListComponent } from './dashboard/etudiants/etudiants-list/etudiants-list.component';
import { EtudiantsComponent } from './dashboard/etudiants/etudiants.component';
import { MainComponent } from './dashboard/main/main.component';
import { DepartementComponent } from './components/departement/departement.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { LoginComponent } from './components/login/login.component';

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
      }
    ]
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
