class Veiculo {

    constructor(private placa: string, private ano: number){
        this.placa = placa;
        this.ano = ano;
    }
}

class Carro extends Veiculo {

    constructor(placa: string, ano: number, private modelo: string){
        super(placa, ano)
        this.modelo = modelo;
    }
}

class CarroEletrico extends Carro{

    constructor(placa: string, ano: number,modelo: string, private autonomia: number){
        super(placa, ano, modelo)
        this.autonomia = autonomia;
    }
}