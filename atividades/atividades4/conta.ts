class Conta{
    constructor (public numero:String, public saldo:number) {}

    sacar(valor: number): boolean{
        if(this.saldo > 0){
            this.saldo = this.saldo - valor
            return true
        } else{
            return false
        }
    }

    depositar(valor: number): void{
        this.saldo = this.saldo + valor;
    }

    consultar_saldo(): number{
        return this.saldo;
    }

    trasnferir(conta_destino: Conta, valor: number): void{
        this.sacar(valor);
        if(this.sacar(valor) == true){
        conta_destino.depositar(valor);
        }
    }
}

let c1: Conta = new Conta("1",100); 
let c2: Conta = new Conta("2",100); 
let c3: Conta; 
c1 = c2; 
c3 = c1; 
c1.sacar(10);
c1.trasnferir(c2,50); 
console.log(c1.consultar_saldo()); //90
console.log(c2.consultar_saldo()); //90
console.log(c3.consultar_saldo()); //90
