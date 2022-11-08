import { Component, Input, OnInit } from '@angular/core';
import { Avion  } from 'src/objets/avion';
import { Plane } from '../models/plane.model';
import { PlaneService } from '../services/plane.service';

@Component({
  selector: 'app-composant-afficher-avion',
  templateUrl: './composant-afficher-avion.component.html',
  styleUrls: ['./composant-afficher-avion.component.css']
})
export class ComposantAfficherAvionComponent implements OnInit {

  @Input() plane!: Plane;

  constructor(private  planeService: PlaneService) { }

  ngOnInit(): void {

  }

}
