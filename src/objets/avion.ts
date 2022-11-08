export class Avion {
    id : number;
    airplane : string;
    type : string;
    price : number;

    constructor(id : number, airplane : string, type : string, price : number){
        this.id = id;
        this.airplane = airplane;
        this.type = type;
        this.price = price;
    }
}
