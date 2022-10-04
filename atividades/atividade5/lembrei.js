"use strict";
exports.__esModule = true;
var prompt_sync_1 = require("prompt-sync");
var input = (0, prompt_sync_1["default"])({});
var contaatv5_js_1 = require("./contaatv5.js");
var b = new contaatv5_js_1.Banco("Banco");
var p1 = new contaatv5_js_1.Pessoa("Emanuel");
var c1 = new contaatv5_js_1.Conta("070", 750, p1);
var opcao = '';
do {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
        '4 - Depositar 5 - Excluir 6 - Transferir\n' +
        '7 – Totalizações' +
        '0 - Sair\n');
    opcao = input("Opção:");
    switch (opcao) {
        case "1":
            b.inserir(c1);
            break;
        case "2":
            b.consultar(c1);
            break;
        //...
    }
    input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");
function inserir() {
    console.log("\nCadastrar conta\n");
    var numero = input('Digite o número da conta:');
    var conta;
    var p2 = new contaatv5_js_1.Pessoa("Nicolas");
    conta = new contaatv5_js_1.Conta(numero, 0, p2);
    b.inserir(conta);
}
