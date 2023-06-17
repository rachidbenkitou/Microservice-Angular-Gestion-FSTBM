import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EtudiantsFormComponent } from './components/dashboard/etudiants/etudiants-form/etudiants-form.component';
import { EtudiantsComponent } from './components/dashboard/etudiants/etudiants.component';
import { MainComponent } from './components/dashboard/main/main.component';
import { EtudiantsListComponent } from './components/dashboard/etudiants/etudiants-list/etudiants-list.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DepartementComponent } from './components/departement/departement.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { LoginComponent } from './components/login/login.component';

import { FilieresComponent } from './components/dashboard/filieres/filieres.component';
import { FiliereListComponent } from './components/dashboard/filieres/filiere-list/filiere-list.component';
import { FiliereFormComponent } from './components/dashboard/filieres/filiere-form/filiere-form.component';
import { EnseignentsComponent } from './components/dashboard/enseignents/enseignents.component';
import { EnseignentListComponent } from './components/dashboard/enseignents/enseignent-list/enseignent-list.component';
import { EnseignentFormComponent } from './components/dashboard/enseignents/enseignent-form/enseignent-form.component';
import { DepartementsComponent } from './components/dashboard/departements/departements.component';
import { DepartementFormComponent } from './components/dashboard/departements/departement-form/departement-form.component';
import { DepartementListComponent } from './components/dashboard/departements/departement-list/departement-list.component';
import { CoursComponent } from './components/dashboard/cours/cours.component';
import { CourFormComponent } from './components/dashbord-enseignant/cour-form/cour-form.component';
import { CourListComponent } from './components/dashboard-etudiant/cour-list/cour-list.component';
import { IndexComponent } from './components/index/index.component';
import { ExamenComponent } from './components/dashboard/examen/examen.component';
import { ExamenListComponent } from './components/dashboard/examen/examen-list/examen-list.component';
import { ExamenFormComponent } from './components/dashboard/examen/examen-form/examen-form.component';
import { ExamenEditFormComponent } from './components/dashboard/examen/examen-edit-form/examen-edit-form.component';
import {RouterModule} from "@angular/router";
import { ModuleComponent } from './components/dashboard/module/module.component';
import { ModuleListComponent } from './components/dashboard/module/module-list/module-list.component';
import { ModuleFormComponent } from './components/dashboard/module/module-form/module-form.component';
import { ModuleEditFormComponent } from './components/dashboard/module/module-edit-form/module-edit-form.component';
import { InscriptionComponent } from './components/dashboard/inscription/inscription.component';
import { InscriptionListComponent } from './components/dashboard/inscription/inscription-list/inscription-list.component';
import { InscriptionFormComponent } from './components/dashboard/inscription/inscription-form/inscription-form.component';
import { DashboardEtudiantComponent } from './components/dashboard-etudiant/dashboard-etudiant.component';
import { InfoComponent } from './components/dashboard-etudiant/info/info.component';
import { NoteComponent } from './components/dashboard-etudiant/note/note.component';
import { MainEtudiantComponent } from './components/dashboard-etudiant/main-etudiant/main-etudiant.component';
import { InscriptionsComponent } from './components/dashboard/inscriptions/inscriptions.component';
import { InscriptionsFormComponent } from './components/dashboard/inscriptions/inscriptions-form/inscriptions-form.component';
import { InscriptionsListComponent } from './components/dashboard/inscriptions/inscriptions-list/inscriptions-list.component';
import { DashbordEnseignantComponent } from './components/dashbord-enseignant/dashbord-enseignant.component';
import { ExamensListComponent } from './components/dashbord-enseignant/examens-list/examens-list.component';
import { ExamensFormComponent } from './components/dashbord-enseignant/examens-form/examens-form.component';
import { ExamensEditFormComponent } from './components/dashbord-enseignant/examens-edit-form/examens-edit-form.component';
import { CourCardComponent } from './components/dashbord-enseignant/cour-card/cour-card.component';


import { NgxWebstorageModule } from 'ngx-webstorage';

import { ToastrModule } from 'ngx-toastr';
import { TokenIntercepter } from './services/TokenIntercepter';
import { ListEtudiantEnsComponent } from './components/dashbord-enseignant/list-etudiant-ens/list-etudiant-ens.component';
import { NoteAjoutFormComponent } from './components/dashbord-enseignant/note-ajout-form/note-ajout-form.component';


@NgModule({
  declarations: [

    AppComponent,
    DashboardComponent,
    MainComponent,
    EtudiantsComponent,
    EtudiantsFormComponent,
    EtudiantsListComponent,
    FilieresComponent,
    FiliereListComponent,
    FiliereFormComponent,
    FilieresComponent,
    FiliereListComponent,
    FiliereFormComponent,
    EnseignentsComponent,
    EnseignentListComponent,
    EnseignentFormComponent,
    DepartementsComponent,
    DepartementFormComponent,
    DepartementListComponent,
    CoursComponent,
    CourFormComponent,
    CourListComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    DepartementComponent,
    EnseignantComponent,
    LoginComponent,
    IndexComponent,
    ExamenComponent,
    ExamenListComponent,
    ExamenFormComponent,
    ExamenEditFormComponent,
    ModuleComponent,
    ModuleListComponent,
    ModuleFormComponent,
    ModuleEditFormComponent,
    InscriptionComponent,
    InscriptionListComponent,
    InscriptionFormComponent,
    DashboardEtudiantComponent,
    InfoComponent,
    NoteComponent,
    MainEtudiantComponent,
    InscriptionsComponent,
    InscriptionsFormComponent,
    InscriptionsListComponent,
    DashbordEnseignantComponent,
    ExamensListComponent,
    ExamensFormComponent,
    ExamensEditFormComponent,
    CourCardComponent,
    ListEtudiantEnsComponent,
    NoteAjoutFormComponent
  ],

  imports: [BrowserModule,AppRoutingModule,HttpClientModule,FormsModule, ReactiveFormsModule
    ,NgxWebstorageModule.forRoot(),ToastrModule.forRoot()],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenIntercepter, multi: true}],
  bootstrap: [AppComponent],

})
export class AppModule {}
