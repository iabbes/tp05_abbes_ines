import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Avion } from 'src/objets/avion';
import { Catalogue } from '../catalogue';
import { PlaneService } from '../services/plane.service';
import { AddPlane } from '../shopping-action';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private store: Store) {}

  ajouterAListeShopping(catalogue: Catalogue): void{
    this.store.dispatch(new AddPlane(catalogue));
  }

  ngOnInit(): void {
  }

}
