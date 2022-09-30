var Equipamento = /** @class */ (function () {
    function Equipamento(ligado) {
        this.ligado = ligado;
    }
    Equipamento.prototype.liga = function () {
        if (this.estaLigado() === false) {
            this.ligado = true;
        }
    };
    Equipamento.prototype.desliga = function () {
        if (this.estaLigado() === true) {
            this.ligado = false;
        }
    };
    Equipamento.prototype.inverte = function () {
        if (this.ligado === true) {
            this.ligado = false;
        }
        else {
            this.ligado = true;
        }
    };
    Equipamento.prototype.estaLigado = function () {
        return this.ligado;
    };
    return Equipamento;
}());
var e1 = new Equipamento(false);
console.log(e1.estaLigado());
e1.inverte();
console.log(e1.estaLigado());
e1.desliga();
console.log(e1.estaLigado());
