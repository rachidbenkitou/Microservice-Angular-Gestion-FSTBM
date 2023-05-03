import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EtudiantsFormComponent } from './dashboard/etudiants/etudiants-form/etudiants-form.component';
import { EtudiantsComponent } from './dashboard/etudiants/etudiants.component';
import { MainComponent } from './dashboard/main/main.component';
import { EtudiantsListComponent } from './dashboard/etudiants/etudiants-list/etudiants-list.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainComponent,
    EtudiantsComponent,
    EtudiantsFormComponent,
    EtudiantsListComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
