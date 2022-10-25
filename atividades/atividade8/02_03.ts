class Calculadora{
    private operando1: number;
    private operando2: number;

    constructor(operando1: number, operando2: number){
        this.operando1 = operando1;
        this.operando2 = operando2;
    }

    public soma(): number{
        return this.operando1 + this.operando2;
    }

    get operandor1 (){
        return this.operando1;
    }

    get operador2 (){
        return this.operando2;
    }

}

class CalculadoraCientifica extends Calculadora{

    constructor(operando1: number, operando2: number){
        super(operando1, operando2)
    }

    public exponenciar() : number {
        return this.operandor1 ** this.operador2
    }

}

let c1: Calculadora = new Calculadora(5, 7);
let c2: CalculadoraCientifica = new CalculadoraCientifica(2, 2);

console.log(c2.exponenciar());
console.log(c1.soma());