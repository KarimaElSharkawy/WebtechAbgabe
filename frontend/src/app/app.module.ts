import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { StartseiteComponent } from './startseite/startseite.component';
import { EintraegeComponent } from './eintraege/eintraege.component';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { BackendService } from './shared/backend.service';
import { AppRoutingModule } from './app.routes';
import { ProfielComponent } from './profiel/profiel.component';
import { FooterComponent } from './footer/footer.component';
import { ContrastService } from './shared/contrast.service'; // Füge den ContrastService hinzu
import { FontSizeService } from './shared/font-size.service';






@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StartseiteComponent,
    ProfielComponent,
    EintraegeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProfielComponent,
    CommonModule,
    BackendService,
    HttpClient,
    RouterModule.forRoot([
      { path: 'startseite', component: StartseiteComponent },
      { path: 'eintraege', component: EintraegeComponent },
      { path: 'profiel', component: ProfielComponent },


      { path: '', redirectTo: '/startseite', pathMatch: 'full' },

      { path: '**', redirectTo: '/startseite' }
    ]),
    BrowserAnimationsModule

],
providers: [FontSizeService, ContrastService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
