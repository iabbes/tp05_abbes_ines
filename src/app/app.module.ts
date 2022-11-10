import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantTetiereComponent } from './composant-tetiere/composant-tetiere.component';
import { ComposantFooterComponent } from './composant-footer/composant-footer.component';
import { ComposantFormulaireComponent } from './composant-formulaire/composant-formulaire.component';
import { ComposantRecapDataComponent } from './composant-recap-data/composant-recap-data.component';
import { ComposantAfficherAvionComponent } from './composant-afficher-avion/composant-afficher-avion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberDirective } from './number.directive';
import { StringDirective } from './string.directive';
import { PhoneNumberPipe } from './phone-number.pipe';
import { FirstCapitalLetterPipe } from './first-capital-letter.pipe';
import { EmailDirective } from './email.directive';
import { ComposantListAvionComponent } from './composant-list-avion/composant-list-avion.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CatalogueComponent } from './catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposantTetiereComponent,
    ComposantFooterComponent,
    ComposantFormulaireComponent,
    ComposantRecapDataComponent,
    ComposantAfficherAvionComponent,
    NumberDirective,
    StringDirective,
    PhoneNumberPipe,
    FirstCapitalLetterPipe,
    EmailDirective,
    ComposantListAvionComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
