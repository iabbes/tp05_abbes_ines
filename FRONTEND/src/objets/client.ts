export class Client {

    nom !: String;
    prenom !: String;
    adresse !: String;
    codepostal !: Number;
    ville !: String;
    tel !: Number;
    mail !: String;
    civilite !: String;
    login !: String;
    password !: String;
    password2 !: String;

    // add constructor 
    constructor(nom: String, prenom: String, adresse: String, codepostal: Number, ville: String, tel: Number, mail: String, civilite: String, login: String, password: String, password2: String) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.codepostal = codepostal;
        this.ville = ville;
        this.tel = tel;
        this.mail = mail;
        this.civilite = civilite;
        this.login = login;
        this.password = password;
        this.password2 = password2;
    }
}
