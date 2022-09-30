var Triangulo = /** @class */ (function () {
    function Triangulo(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Triangulo.prototype.ehTriangulo = function (a, b, c) {
        return this.a > Math.abs(this.b - this.c) && (this.b + this.c) > this.a;
    };
    Triangulo.prototype.ehIsoceles = function (a, b, c) {
        if (!this.ehTriangulo(a, b, c)) {
            return false;
        }
        else {
            return this.a === this.b || this.a === this.c || this.b === this.c;
        }
    };
    Triangulo.prototype.ehEquilatero = function (a, b, c) {
        if (!this.ehTriangulo(a, b, c)) {
            return false;
        }
        else {
            return this.a === this.b && this.b === this.c;
        }
    };
    Triangulo.prototype.ehEscaleno = function (a, b, c) {
        if (!this.ehTriangulo(a, b, c)) {
            return false;
        }
        else {
            return this.a != this.b || this.a != this.c || this.b != this.c;
        }
    };
    return Triangulo;
}());
var t1 = new Triangulo(5, 4, 3);
console.log(t1.ehTriangulo(5, 4, 3));
console.log(t1.ehEquilatero(5, 4, 3));
console.log(t1.ehIsoceles(5, 4, 3));
console.log(t1.ehEscaleno(5, 4, 3));
