import prompt from 'prompt-sync';
const input = prompt({});
import { Conta, Banco, Pessoa } from "./contaatv5.js";


let b: Banco = new Banco("Banco");
let p1: Pessoa = new Pessoa("Emanuel")
let c1: Conta  = new Conta("070", 750, p1)
let opcao: String = '';
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
break
case "2":
b.consultar(c1);
break
//...
}
input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");

function inserir(): void {
console.log("\nCadastrar conta\n");
let numero: string = input('Digite o número da conta:');
let conta: Conta;
let p2: Pessoa = new Pessoa("Nicolas")
conta = new Conta(numero, 0, p2);
b.inserir(conta);
}