var Hora = /** @class */ (function () {
    function Hora(horas, minutos, segundos) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    Hora.prototype.ler_hora = function () {
        return this.horas;
    };
    Hora.prototype.ler_minutos = function () {
        return this.minutos;
    };
    Hora.prototype.ler_segundos = function () {
        return this.segundos;
    };
    Hora.prototype.hora_exata = function () {
        return "".concat(this.horas, ":").concat(this.minutos, ":").concat(this.segundos);
    };
    return Hora;
}());
var h1 = new Hora(17, 26, 53);
console.log(h1.ler_hora());
console.log(h1.ler_minutos());
console.log(h1.ler_segundos());
console.log(h1.hora_exata());
