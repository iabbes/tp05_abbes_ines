import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { Avion } from "src/objets/avion";
import { SupprimerAvion } from "../action-shopping";
import { EtatShopping } from "../etat-shopping";

@Component({
  selector: "app-panier",
  templateUrl: "./panier.component.html",
  styleUrls: ["./panier.component.css"],
})
export class PanierComponent implements OnInit {
  ngOnInit(): void {}

  dataSource = this.store.select((state) => state.avions.avions);

  constructor(private store: Store) {}


}
