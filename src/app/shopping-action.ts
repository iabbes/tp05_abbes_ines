import { Catalogue } from "./catalogue";

export class AddPlane {
    static readonly type = '[Catalogue] Add';
  
    constructor(public payload: Catalogue) { }
  }
  
  export class DeletePlane {
    static readonly type = '[Catalogue] Delete';
  
    constructor(public payload: Catalogue) { }
  }