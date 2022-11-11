import { Avion } from "src/objets/avion";


export class AjouterAvion {
    static readonly type = '[Avion] Add';
  
    constructor(public payload: Avion) { }
  }
  
  export class SupprimerAvion {
    static readonly type = '[Avion] Delete';
  
    constructor(public payload: Avion) { }
  }