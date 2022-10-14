class Calculadora{
    constructor(private operando1: number, private operando2: number) {}

    public soma(): number{
        return this.operando1 + this.operando2
    }

    public subtracao(): number{
        return this.operando1 - this.operando2
    }

    get ver_operando1(): number{
        return this.operando1
    }

    get ver_operando2(): number{
        return this.operando2
    }

}

let c1: Calculadora = new Calculadora(13,22)
console.log(c1.ver_operando1)
console.log(c1.ver_operando2)

console.log(c1.soma())
console.log(c1.subtracao())