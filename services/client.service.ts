import { Injectable } from '@angular/core';
import { Catalogue } from '../src/app/catalogue';
import { Observable } from 'rxjs';
import { environment } from '../src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {}
  env = environment;
  
  public getClient(){ 
    return {nom : 'nom',
    prenom : 'prenom',
    adresse : 'adresse',
    codepostal: 'codepostal',
    ville: 'ville',
    tel: 'tel',
    mail: 'mail',
    civilite: 'civilite',
    login: 'login',
    password: 'password',
    password2: 'password2',};
  }
  public postClient(client){
    console.log(client)
  }
  
  public postLogin(login:string, password: string){
    if(login == 'test' && password == 'test'){
      return true;
    }
    return false;
  }

}