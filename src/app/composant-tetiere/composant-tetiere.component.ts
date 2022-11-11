import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EtatShopping } from '../etat-shopping';

@Component({
  selector: 'app-composant-tetiere',
  templateUrl: './composant-tetiere.component.html',
  styleUrls: ['./composant-tetiere.component.css']
})
export class ComposantTetiereComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Select(EtatShopping.getNbProducts)
  numberProduct$!: Observable<number>;

}
