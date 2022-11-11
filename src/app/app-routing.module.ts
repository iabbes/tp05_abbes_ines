import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ComposantFormulaireComponent } from './composant-formulaire/composant-formulaire.component';
import { ComposantListAvionComponent } from './composant-list-avion/composant-list-avion.component';
import { DetailAvionComponent } from './detail-avion/detail-avion.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: 'avion', loadChildren: () => import('./avion/avion.module').then(m => m.AvionModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
