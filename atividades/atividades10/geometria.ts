abstract class FiguraGeometrica {

        protected lado: number;

        constructor(lado: number){
            this.lado = lado;
        }

        abstract perimetro(): number;
        abstract area(): number;
}


class Quadrado extends FiguraGeometrica{

        perimetro(): number {
            return 4 * this.lado
        }


        area(): number {
            return this.lado ** 2
        }

}


class Triangulo extends FiguraGeometrica{

    protected lado2: number;
    protected lado3: number;
    protected base: number;
    protected altura: number;

    constructor(lado: number, lado2: number, lado3: number, altura: number){
        super(lado)
        this.lado2 = lado2;
        this.lado3 = lado3;
        this.altura = altura
    }

    perimetro(): number {
        return this.lado + this.lado2 + this.lado3
    }


    area(): number {
        return (this.lado * this.altura)/2
    }
}


class Retangulo extends FiguraGeometrica{

    lado2: number;

    constructor(lado: number, lado2: number){
        super(lado)
        this.lado2 = lado2
    }

    perimetro(): number {
        return (2 * this.lado + 2 * this.lado2)
    }


    area(): number {
        return this.lado * this.lado2
    }

}


let q1: Quadrado = new Quadrado(5);
console.log(q1.area());
console.log(q1.perimetro());

let t1: Triangulo = new Triangulo(3, 4, 5, 4);
console.log(t1.area());
console.log(t1.perimetro());

let r1: Retangulo = new Retangulo(4, 5);
console.log(r1.area());
console.log(r1.perimetro());