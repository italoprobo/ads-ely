var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica(lado) {
        this.lado = lado;
    }
    return FiguraGeometrica;
}());
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quadrado.prototype.perimetro = function () {
        return 4 * this.lado;
    };
    Quadrado.prototype.area = function () {
        return Math.pow(this.lado, 2);
    };
    return Quadrado;
}(FiguraGeometrica));
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(lado, lado2, lado3, altura) {
        var _this = _super.call(this, lado) || this;
        _this.lado2 = lado2;
        _this.lado3 = lado3;
        _this.altura = altura;
        return _this;
    }
    Triangulo.prototype.perimetro = function () {
        return this.lado + this.lado2 + this.lado3;
    };
    Triangulo.prototype.area = function () {
        return (this.lado * this.altura) / 2;
    };
    return Triangulo;
}(FiguraGeometrica));
var Retangulo = /** @class */ (function (_super) {
    __extends(Retangulo, _super);
    function Retangulo(lado, lado2) {
        var _this = _super.call(this, lado) || this;
        _this.lado2 = lado2;
        return _this;
    }
    Retangulo.prototype.perimetro = function () {
        return (2 * this.lado + 2 * this.lado2);
    };
    Retangulo.prototype.area = function () {
        return this.lado * this.lado2;
    };
    return Retangulo;
}(FiguraGeometrica));
var q1 = new Quadrado(5);
console.log(q1.area());
console.log(q1.perimetro());
var t1 = new Triangulo(3, 4, 5, 4);
console.log(t1.area());
console.log(t1.perimetro());
