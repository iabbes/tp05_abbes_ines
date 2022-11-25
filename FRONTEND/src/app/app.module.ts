import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantAfficherAvionComponent } from './composant-afficher-avion/composant-afficher-avion.component';
import { ComposantFooterComponent } from './composant-footer/composant-footer.component';
import { ComposantListAvionComponent } from './composant-list-avion/composant-list-avion.component';
import { ComposantTetiereComponent } from './composant-tetiere/composant-tetiere.component';
import { DetailAvionComponent } from './detail-avion/detail-avion.component';
import { EtatShopping } from './etat-shopping';
import { PanierComponent } from './panier/panier.component';
import { ClientModule } from './client/client.module';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposantTetiereComponent,
    ComposantFooterComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxsModule.forRoot([EtatShopping]),
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
