var Calculadora = /** @class */ (function () {
    function Calculadora(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    Calculadora.prototype.soma = function () {
        return this.operando1 + this.operando2;
    };
    Calculadora.prototype.subtracao = function () {
        return this.operando1 - this.operando2;
    };
    Object.defineProperty(Calculadora.prototype, "ver_operando1", {
        get: function () {
            return this.operando1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculadora.prototype, "ver_operando2", {
        get: function () {
            return this.operando2;
        },
        enumerable: false,
        configurable: true
    });
    return Calculadora;
}());
var c1 = new Calculadora(13, 22);
console.log(c1.ver_operando1);
console.log(c1.ver_operando2);
console.log(c1.soma());
console.log(c1.subtracao());
