import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../objets/client';
@Component({
  selector: 'app-composant-formulaire',
  templateUrl: './composant-formulaire.component.html',
  styleUrls: ['./composant-formulaire.component.css']
})
export class ComposantFormulaireComponent implements OnInit {

  constructor() { }

  clientForm = new FormGroup({
    nom: new FormControl('',[Validators.required]),
    prenom: new FormControl('',[Validators.required]),
    adresse: new FormControl('',[Validators.required]),
    ville: new FormControl('',[Validators.required]),
    codepostal: new FormControl('',[Validators.required, Validators.pattern('[0-9]{5}')]),
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('',[Validators.required]),
    password2: new FormControl('',[Validators.required]),
    tel: new FormControl('',[Validators.required]),
    login: new FormControl('',[Validators.required]),
    civilite: new FormControl('',[Validators.required]),
  });

  nom !: String;
  prenom !: String;
  adresse !: String;
  codepostal !: Number;
  ville !: String;
  tel !: Number;
  email !: String;
  civilite !: String;
  login !: String;
  password !: String;
  password2 !: String; 
  
  client !: Client; 

  formIsValid : boolean = false;

  verifierForm(){
    console.log("verifierForm");
    if(this.nom != undefined && this.prenom != undefined && this.adresse != undefined && this.codepostal != undefined && this.ville != undefined && this.tel != undefined && this.email != undefined && this.civilite != undefined && this.login != undefined && this.password != undefined && this.password2 != undefined){
      this.formIsValid = false;
    }
    this.formIsValid = true;
  }


  creerClientEtAfficher(){
    this.verifierForm();
    this.client = new Client(this.nom, this.prenom, this.adresse, this.codepostal, this.ville, this.tel, this.email, this.civilite, this.login, this.password, this.password2);
  }

  desaffiche(){
    this.client = null;
  }

//!: --> signifie que la variable sera initialisé par la suite par un modèle de données
  ngOnInit(): void {
  }
}
