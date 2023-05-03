import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EtudiantsFormComponent } from './dashboard/etudiants/etudiants-form/etudiants-form.component';
import { EtudiantsComponent } from './dashboard/etudiants/etudiants.component';
import { MainComponent } from './dashboard/main/main.component';
import { EtudiantsListComponent } from './dashboard/etudiants/etudiants-list/etudiants-list.component';

import { FilieresComponent } from './dashboard/filieres/filieres.component';
import { FiliereListComponent } from './dashboard/filieres/filiere-list/filiere-list.component';
import { FiliereFormComponent } from './dashboard/filieres/filiere-form/filiere-form.component';
import { EnseignentsComponent } from './dashboard/enseignents/enseignents.component';
import { EnseignentListComponent } from './dashboard/enseignents/enseignent-list/enseignent-list.component';
import { EnseignentFormComponent } from './dashboard/enseignents/enseignent-form/enseignent-form.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
