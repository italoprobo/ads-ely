class Pessoa {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

class Conta{
    constructor (private numero:String, private saldo:number, private cliente: Pessoa) {}

    sacar(valor: number): void{
        this.saldo = this.saldo - valor
    }

    depositar(valor: number): void{
        this.saldo = this.saldo + valor;
    }

    consultar_saldo(): number{
        return this.saldo;
    }

    get nomeCliente() {
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

    get numeros() {
        return this.numero
    }

    get saldos() {
        return this.saldo
    } 
}

class Banco{
    nomeBanco: string
    constructor(nomeBanco: string) {
        this.nomeBanco = nomeBanco;
    }

    private contas: Conta[] = [];

    private consultar(contaum: Conta): boolean {
        if(this.contas[0] === undefined) {
            return true
        } else {
            for(let conta of this.contas) {
                if(contaum.numeros === conta.numeros) {
                break
            }

            return true
        }
        }  
        return false
    }

    public consultar_por_numero(numero: string): boolean {
        if(this.contas[0] === undefined) {
            return true
        } else {
            for(let conta of this.contas) {
                if(numero === conta.numeros) {
                break
            }

            return true
        }
        }  
        return false
    }

    public inserir(contaum: Conta): void {
        if(this.consultar(contaum)){
            this.contas.push(contaum)
        }else{
            console.log("Conta Invalida!")
        }
    }

    public sacar(numero: string, valor: number): void{
        for(let i = 0; i < this.contas.length; i++){
            if(numero === this.contas[i].numeros){
                this.contas[i].sacar(valor)
            }
        }
    }

    public depositar(numero: string, valor: number): void{
        for(let i = 0; i < this.contas.length; i++){
            if(numero === this.contas[i].numeros){
                this.contas[i].depositar(valor)
            }
        }
    }


    public transferir(numeroCredito: string, numeroDebito: string, valor: number){
        this.sacar(numeroDebito, valor)
        this.depositar(numeroCredito, valor)
    }


    public qtd_contas(): number{
        return this.contas.length
    }


    public soma_dinheiro_contas(): number{
        let soma: number = 0
        for(let i = 0; i < this.contas.length; i++){
            soma += this.contas[i].saldos
        }
        
        return soma
    }

    public media_geral(): number{
        return this.soma_dinheiro_contas() / this.qtd_contas()
    }

    public renderJuros(numero: string){
        if(this.consultar_por_numero(numero)){

        }
    }
}


let p1: Pessoa = new Pessoa("Icaro")
let p2: Pessoa = new Pessoa("Italo")

let c1: Conta = new Conta("20", 4200, p1)
let c2: Conta = new Conta("21", 750, p2)

let b1: Banco = new Banco("Banco")

b1.inserir(c1)
b1.inserir(c2)
console.log(b1.qtd_contas());
console.log(b1.soma_dinheiro_contas());
console.log(b1.media_geral());
