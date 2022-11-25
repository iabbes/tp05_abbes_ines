import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposantListAvionComponent } from '../composant-list-avion/composant-list-avion.component';
import { PanierComponent } from '../panier/panier.component';
import { DetailAvionComponent } from '../detail-avion/detail-avion.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ComposantAfficherAvionComponent } from '../composant-afficher-avion/composant-afficher-avion.component';

const routes: Routes = [  
  { path: 'listPlane', component: ComposantListAvionComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'avion/:id', component: DetailAvionComponent }
];

@NgModule({
  declarations: [
    ComposantAfficherAvionComponent,
    ComposantListAvionComponent,
    PanierComponent,
    DetailAvionComponent
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
export class AvionModule { }