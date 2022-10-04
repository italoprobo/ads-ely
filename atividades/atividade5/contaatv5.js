var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    return Pessoa;
}());
var Conta = /** @class */ (function () {
    function Conta(numero, saldo, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
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
    Conta.prototype.getnomeCliente = function () {
        return this.cliente.nome;
    };
    Conta.prototype.trasnferir = function (conta_destino, valor) {
        this.sacar(valor);
        conta_destino.depositar(valor);
    };
    Conta.prototype.equals = function (conta) {
        return (this.numero == conta.numero &&
            this.cliente.nome == conta.cliente.nome);
    };
    return Conta;
}());
var Banco = /** @class */ (function () {
    function Banco(nomeBanco) {
        this.contas = [];
        this.nomeBanco = nomeBanco;
    }
    Banco.prototype.consultar = function (contaum) {
        if (this.contas[0] === undefined) {
            return true;
        }
        else {
            for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
                var conta = _a[_i];
                if (contaum.numero === conta.numero) {
                    break;
                }
                return true;
            }
        }
        return false;
    };
    Banco.prototype.inserir = function (contaum) {
        if (this.consultar(contaum)) {
            this.contas.push(contaum);
        }
        else {
            console.log("Conta Invalida!");
        }
    };
    Banco.prototype.sacar = function (numero, valor) {
        for (var i = 0; this.contas.length; i++) {
            if (numero === this.contas[i].numero) {
                this.contas[i].saldo = this.contas[i].saldo - valor;
            }
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        for (var i = 0; this.contas.length; i++) {
            if (numero === this.contas[i].numero) {
                this.contas[i].saldo = this.contas[i].saldo + valor;
            }
        }
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        this.sacar(numeroDebito, valor);
        this.depositar(numeroCredito, valor);
    };
    Banco.prototype.qtd_contas = function () {
        return this.contas.length;
    };
    Banco.prototype.soma_dinheiro_contas = function () {
        var soma = 0;
        for (var i = 0; this.contas.length; i++) {
            soma += this.contas[i].saldo;
        }
        return soma;
    };
    Banco.prototype.media_geral = function () {
        return this.soma_dinheiro_contas() / this.qtd_contas();
    };
    return Banco;
}());
var p1 = new Pessoa("Icaro");
var p2 = new Pessoa("Italo");
var c1 = new Conta("20", 4200, p1);
var c2 = new Conta("21", 750, p2);
var b1 = new Banco("Banco");
b1.inserir(c1);
b1.inserir(c2);
console.log(b1.qtd_contas());
console.log(b1.soma_dinheiro_contas());
console.log(b1.media_geral());
