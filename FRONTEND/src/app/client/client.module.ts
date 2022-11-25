import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposantFormulaireComponent } from '../composant-formulaire/composant-formulaire.component';
import { ComposantRecapDataComponent } from '../composant-recap-data/composant-recap-data.component';
import { NumberDirective } from '../number.directive';
import { StringDirective } from '../string.directive';
import { PhoneNumberPipe } from '../phone-number.pipe';
import { FirstCapitalLetterPipe } from '../first-capital-letter.pipe';
import { EmailDirective } from '../email.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ComposantFormulaireComponent },
  { path: 'recap', component: ComposantRecapDataComponent }
];

@NgModule({
  declarations: [
    ComposantFormulaireComponent,
    ComposantRecapDataComponent,
    NumberDirective,
    StringDirective,
    PhoneNumberPipe,
    FirstCapitalLetterPipe,
    EmailDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }
