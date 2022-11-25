import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";

import { Plane } from "../models/plane.model";
import json from "../../assets/catalogue.json";

@Injectable({
    providedIn: 'root'
})

export class LoginService{

    constructor(private http: HttpClient){

    }
   
    
    login(login: string, password: string): Observable<any> {
        return this.http.post<any>("https://tp05-web-cnam.onrender.com/api/getLogin", {log: login, mdp: password});
      }


}