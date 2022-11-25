import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Avion  } from '../../../../FRONTEND/src/objets/avion';
import { AjouterAvion, SupprimerAvion } from '../action-shopping';
import { Plane } from '../models/plane.model';
import { PlaneService } from '../services/plane.service';

@Component({
  selector: 'app-composant-afficher-avion',
  templateUrl: './composant-afficher-avion.component.html',
  styleUrls: ['./composant-afficher-avion.component.css']
})
export class ComposantAfficherAvionComponent implements OnInit {

  @Input() plane!: Plane;

  constructor(private  planeService: PlaneService, private store: Store) { 

  }

  ngOnInit(): void {

  }

  AjouterALaListeShopping(avion: Avion): void{
    this.store.dispatch(new AjouterAvion(avion));
  }

  SupprimerAvionListeShopping(element: Avion) {
    this.store.dispatch(new SupprimerAvion(element));
  }
}
