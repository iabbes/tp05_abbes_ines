import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";

import { Plane } from "../models/plane.model";
import json from "../../assets/catalogue.json";

@Injectable({
    providedIn: 'root'
})

export class PlaneService{

    constructor(private http: HttpClient){

    }
    planes$ = of(json);
    
    getAllPlanes(): Observable<Plane[]>{
      return this.http.get<Plane[]>('https://tp05-web-cnam.onrender.com/api/planes/getAll');
      ;  
    }


}