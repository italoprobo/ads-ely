var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        this.saldo = this.saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultar_saldo = function () {
        return this.saldo;
    };
    Conta.prototype.trasnferir = function (conta_destino, valor) {
        this.sacar(valor);
        conta_destino.depositar(valor);
    };
    return Conta;
}());
var c1 = new Conta("1", 100);
var c2 = new Conta("2", 100);
var c3;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.trasnferir(c2, 50);
console.log(c1.consultar_saldo());
console.log(c2.consultar_saldo());
console.log(c3.consultar_saldo());
