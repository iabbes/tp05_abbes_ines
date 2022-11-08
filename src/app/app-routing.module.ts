import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposantFormulaireComponent } from './composant-formulaire/composant-formulaire.component';
import { ComposantListAvionComponent } from './composant-list-avion/composant-list-avion.component';

const routes: Routes = [
  { path: '', component: ComposantFormulaireComponent },
  { path: 'formulaire', component: ComposantFormulaireComponent },
  { path: 'listPlane', component: ComposantListAvionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
