class Triangulo{
    constructor (public a: number, public b: number, public c: number) {}

    ehTriangulo(a: number, b: number, c: number): boolean {
        return this.a > Math.abs(this.b-this.c) && (this.b+this.c) > this.a ;
    }

    ehIsoceles(a: number, b: number, c: number): boolean{
        if(!this.ehTriangulo(a, b, c)){
            return false
        }else{
            return this.a === this.b || this.a === this.c || this.b === this.c ;
        }
    }

    ehEquilatero(a: number, b: number, c: number): boolean{
        if(!this.ehTriangulo(a, b, c)){
            return false
        }else{
            return this.a === this.b && this.b === this.c ;
        }
    }

    ehEscaleno(a: number, b: number, c: number): boolean{
        if(!this.ehTriangulo(a, b, c)){
            return false
        }else{
            return this.a != this.b || this.a != this.c || this.b != this.c ;
        }
    }

}

let t1: Triangulo = new Triangulo(5, 4, 3);
console.log(t1.ehTriangulo(5, 4, 3));
console.log(t1.ehEquilatero(5, 4, 3));
console.log(t1.ehIsoceles(5, 4, 3));
console.log(t1.ehEscaleno(5, 4, 3));