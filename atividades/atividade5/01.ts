class Pessoa {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

class Conta{
    constructor (public numero:String, public saldo:number, public cliente: Pessoa) {}

    sacar(valor: number): void{
        this.saldo = this.saldo - valor
    }

    depositar(valor: number): void{
        this.saldo = this.saldo + valor;
    }

    consultar_saldo(): number{
        return this.saldo;
    }

    getnomeCliente() {
        return this.cliente.nome;
    }

    trasnferir(conta_destino: Conta, valor: number): void{
        this.sacar(valor);
        conta_destino.depositar(valor);
    }

    equals(conta: Conta): boolean {
        return (this.numero == conta.numero && 
                this.cliente.nome == conta.cliente.nome);
    }
}

class Banco{
    nomeBanco: string
    constructor(nomeBanco: string) {
        this.nomeBanco = nomeBanco;
    }

    contas: Conta[] = [];

    consultar(contaum: Conta): boolean {
        if(this.contas[0] === undefined) {
            return true
        } else {
            for(let conta of this.contas) {
                if(contaum.numero === conta.numero) {
                break
            }

            return true
        }
        }  
        return false
    }

    inserir(contaum: Conta): void {
        if(this.consultar(contaum)){
            this.contas.push(contaum)
        }else{
            console.log("Conta Invalida!")
        }
    }

    sacar(numero: string, valor: number): void{
        for(let i = 0; this.contas.length; i++){
            if(numero === this.contas[i].numero){
                this.contas[i].saldo = this.contas[i].saldo - valor
            }
        }
    }

    depositar(numero: string, valor: number): void{
        for(let i = 0; this.contas.length; i++){
            if(numero === this.contas[i].numero){
                this.contas[i].saldo = this.contas[i].saldo + valor
            }
        }
    }

    transferir(numeroCredito: string, numeroDebito: string, valor: number){
        this.sacar(numeroDebito, valor)
        this.depositar(numeroCredito, valor)
    }

    
}


let p1: Pessoa = new Pessoa("Icaro")
let p2: Pessoa = new Pessoa("Italo")

let c1: Conta = new Conta("20", 4200, p1)
let c2: Conta = new Conta("21", 750, p2)

let b1: Banco = new Banco("Banco")

b1.inserir(c1)
b1.inserir(c2)
