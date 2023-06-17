import { CourCardComponent } from './components/dashbord-enseignant/cour-card/cour-card.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CourFormComponent } from './components/dashbord-enseignant/cour-form/cour-form.component';
import { CourListComponent } from './components/dashboard-etudiant/cour-list/cour-list.component';
import { CoursComponent } from './components/dashboard/cours/cours.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartementFormComponent } from './components/dashboard/departements/departement-form/departement-form.component';
import { DepartementListComponent } from './components/dashboard/departements/departement-list/departement-list.component';
import { DepartementsComponent } from './components/dashboard/departements/departements.component';
import { EnseignentFormComponent } from './components/dashboard/enseignents/enseignent-form/enseignent-form.component';
import { EnseignentListComponent } from './components/dashboard/enseignents/enseignent-list/enseignent-list.component';
import { EnseignentsComponent } from './components/dashboard/enseignents/enseignents.component';

import { EtudiantsFormComponent } from './components/dashboard/etudiants/etudiants-form/etudiants-form.component';
import { EtudiantsListComponent } from './components/dashboard/etudiants/etudiants-list/etudiants-list.component';
import { EtudiantsComponent } from './components/dashboard/etudiants/etudiants.component';
import { FiliereFormComponent } from './components/dashboard/filieres/filiere-form/filiere-form.component';
import { FiliereListComponent } from './components/dashboard/filieres/filiere-list/filiere-list.component';
import { FilieresComponent } from './components/dashboard/filieres/filieres.component';

import { MainComponent } from './components/dashboard/main/main.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { DepartementComponent } from './components/departement/departement.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import {ExamenComponent} from "./components/dashboard/examen/examen.component";
import {ExamenListComponent} from "./components/dashboard/examen/examen-list/examen-list.component";
import {ExamenFormComponent} from "./components/dashboard/examen/examen-form/examen-form.component";
import {ExamenEditFormComponent} from "./components/dashboard/examen/examen-edit-form/examen-edit-form.component";
import { ModuleListComponent } from './components/dashboard/module/module-list/module-list.component';
import { ModuleComponent } from './components/dashboard/module/module.component';
import { ModuleFormComponent } from './components/dashboard/module/module-form/module-form.component';
import { ModuleEditFormComponent } from './components/dashboard/module/module-edit-form/module-edit-form.component';
import {InfoComponent} from "./components/dashboard-etudiant/info/info.component";
import {NoteComponent} from "./components/dashboard-etudiant/note/note.component";
import {DashboardEtudiantComponent} from "./components/dashboard-etudiant/dashboard-etudiant.component";
import {MainEtudiantComponent} from "./components/dashboard-etudiant/main-etudiant/main-etudiant.component";

import { DashbordEnseignantComponent } from './components/dashbord-enseignant/dashbord-enseignant.component';
import { ExamensListComponent } from './components/dashbord-enseignant/examens-list/examens-list.component';

import { ListEtudiantsComponent } from './components/dashbord-enseignant/list-etudiants/list-etudiants.component';

import { ExamensFormComponent } from './components/dashbord-enseignant/examens-form/examens-form.component';
import { ExamensEditFormComponent } from './components/dashbord-enseignant/examens-edit-form/examens-edit-form.component';
import { AuthGuardGuard } from './auth-guard.guard';
import {InscriptionComponent} from "./components/dashboard/inscription/inscription.component";
import {InscriptionListComponent} from "./components/dashboard/inscription/inscription-list/inscription-list.component";
import {InscriptionFormComponent} from "./components/dashboard/inscription/inscription-form/inscription-form.component";
import { ListEtudiantEnsComponent } from './components/dashbord-enseignant/list-etudiant-ens/list-etudiant-ens.component';
import { NoteAjoutFormComponent } from './components/dashbord-enseignant/note-ajout-form/note-ajout-form.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, }, @TODO: Add Home Component
  {
    path: "test",
    component: ListEtudiantEnsComponent
  }
,

{
path: 'dashboard',
children:[
{
  path: 'ENSEIGNANT',
  component: DashbordEnseignantComponent,
  canActivate:[AuthGuardGuard],

  children: [
    {
      path: '',
      component: MainEtudiantComponent,
    },
    {
      path: 'exams/add',
      component: ExamensFormComponent,
    },
    {
      path: 'edit/:id',
      component: ExamensEditFormComponent,
    },
    {
      path: 'info',
      component: InfoComponent,
    },
    {
      path: 'exams',
      component: ExamensListComponent,
    },
    {
      path: 'etudiants',
      component: ListEtudiantEnsComponent
    },
    {
      path: 'etudiants/note/add/:id',
      component: NoteAjoutFormComponent
    },
    {
      path: 'cour',
      children :[
        {
          path: '',
          component: CourCardComponent,
        },
        {
          path: 'add',
          component: CourFormComponent,
        }
      ]

    }


  ]

},
{
    path: 'ETUDIANT',
    component: DashboardEtudiantComponent,
    canActivate:[AuthGuardGuard],

    children: [
      {
        path: '',
        component: MainEtudiantComponent,
      },

      {
        path: 'cours',
        component: CourListComponent,
      },
      {
        path: 'note',
        component: NoteComponent,
      }
    ]

},

{
    path: 'ADMIN',
    component: DashboardComponent,
    canActivate:[AuthGuardGuard],

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
        path: 'inscriptions',
        component: InscriptionComponent,
        children: [
          {
            path: '',
            component: InscriptionListComponent,
          },
          {
            path: 'add',
            component: InscriptionFormComponent,
          },
          {
            path: 'edit/:id',
            component: InscriptionFormComponent,
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
        path: 'examens',
        component: ExamenComponent,
        children: [
          {
            path: '',
            component: ExamenListComponent,
          },
          {
            path: 'add',
            component: ExamenFormComponent,
          },
          {

            path: 'edit/:id',
            component: ExamenEditFormComponent,
          },
        ],
      },          {
        path: 'module',
        component: ModuleComponent,
        children: [
          {
            path: '',
            component: ModuleListComponent,
          },
          {
            path: 'add',
            component: ModuleFormComponent,
          },
          {

            path: 'edit/:moduleId',
            component: ModuleEditFormComponent,
          },
        ],
      },
    ],
}
]
},
{
path:'',component:IndexComponent,
children:[
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
]

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
