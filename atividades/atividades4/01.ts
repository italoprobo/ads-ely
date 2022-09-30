class Hotel { 

    constructor (public quantReservas : number) {} 

    adicionarReserva() : void { 
        this.quantReservas++; 
    }
} 

let hotel : Hotel = new Hotel(2); 
console.log(hotel.quantReservas); //2
