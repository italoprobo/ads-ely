
class Conta {
    private _numero: string;
    private _saldo: number;

    constructor(numero: string, saldo: number) {
        this._numero = numero;
        this._saldo = saldo;
    }

    public sacar(valor: number): void {
        this._saldo = this._saldo - this.validarValor(valor);

    }
    
    public depositar(valor: number): void {
        this._saldo = this._saldo + this.validarValor(valor);
    }

    public transferir(contaDestino: Conta, valor: number) {
        this.sacar(this.validarValor(valor));
        contaDestino.depositar(valor);
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get numero(): string {
        return this._numero;
    }

    validarValor(valor: number): number {
        if(valor > 0){
            return valor
        } else {
            throw new ValorInvalidoError("Valor invalido!")
        }
    }
}


class Poupanca extends Conta {
    private _taxaDejuros: number;

    public get taxaDeJuros(): number {
        return this._taxaDejuros;
    }

    constructor(numero: string, saldo: number, taxaDeJuros: number) {
        super(numero, saldo);
        this._taxaDejuros = taxaDeJuros;
    }

    public renderJuros() {
        let saldo = this.saldo;
        this.depositar(saldo * this.taxaDeJuros/100);
    }

}

class ContaImposto extends Conta {
    private _taxaDeDesconto: number;

    constructor(numero: string, saldo: number, taxaDeDesconto: number) {
        super(numero, saldo);
        this._taxaDeDesconto = taxaDeDesconto;
    }
    
    sacar(valor: number) {
       let valorTotal = valor + valor*this._taxaDeDesconto/100;
       super.sacar(valorTotal);
    }
}


class Banco {
    private _contas: Conta[] = [];

    inserir(conta: Conta) {
        try {
            this.consultar(conta)
        } catch (conta) {            
            this._contas.push(conta);
        }
    }

    consultar(contaaleatoria: Conta): string {
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == contaaleatoria.numero) {
                return contaaleatoria.numero;
            }
            else {
                break;
            }
        }

        throw new ContaInexistenteError("Conta n existe");
    }

    private consultarComFilter(numero: string): Conta {
        return this._contas.filter(conta => conta.numero == numero)[0];
    }

    private consultarPorIndice(numero: string): number {
        let indiceProcurado: number = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceProcurado = i;
            }
            else {
                throw new ContaInexistenteError("Conta n existe");  
            }
        }

        return indiceProcurado;
    }


    alterar(conta: Conta) {
        let indice: number = this.consultarPorIndice(conta.numero);
            this._contas[indice] = conta;
    }

    depositar(numero: string, valor: number): void {
        let indice = this.consultarPorIndice(numero);

        if (indice != -1) {
            this._contas[indice].depositar(valor);
        }
    }

    sacar(numero: string, valor: number): void {
        let indice = this.consultarPorIndice(numero);
            this._contas[indice].sacar(valor);
    }

    excluir(numero: string): void {
        let indice: number = this.consultarPorIndice(numero);

        if (indice != -1) {
            for (var i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    }

    transferir(numeroDebito: string, numeroCredito: string, valor: number) {
        this.sacar(numeroDebito, valor)
        this.depositar(numeroCredito, valor)
	}

	calcularQuantidadeContas(): number {
		return this._contas.length;
	}

	calcularTotalSaldos(): number {
		let totalSaldo: number = 0;
		for (let conta of this._contas) {
			totalSaldo += conta.saldo;
		}

		return totalSaldo;
	}

	calcularMediaSaldos() {
		return this.calcularTotalSaldos() / this.calcularQuantidadeContas();
	}

    renderJuros(numero: string) {
        let contaProcurada = this.consultarComFilter(numero)

        if (contaProcurada != null && contaProcurada instanceof Poupanca) {
            contaProcurada.renderJuros();
        } else {
            throw new PoupancaInvalidaError("Não é uma poupança!")
        }
    }

    
    listaContas(): string {
        let listaStrings = '';
        for(let i: number = 0; i < this._contas.length; i++) {
            listaStrings = listaStrings + 
                           ' Numero: ' + this._contas[i].numero +  
                           ' - Saldo: '  + this._contas[i].saldo + '\n';
                           
        }   

        return listaStrings;
    }
    
}


class AplicacaoError extends Error{
        constructor(message: string) {
            super(message);
        }
}


class SaldoInsuficienteError extends AplicacaoError {

        constructor(message: string) {
            super(message);
        }
}


class ContaInexistenteError extends AplicacaoError {

        constructor(message: string) {
            super(message);
        }
}


class ValorInvalidoError extends AplicacaoError {

    constructor(message: string){
        super(message);
    }
}


class PoupancaInvalidaError extends Error {

    constructor(message: string){
        super(message);
    }
}


let b: Banco = new Banco();
let c: Conta = new Poupanca("1", 100, 0.5);
b.inserir(c);
b.renderJuros("1");
console.log(c);


export { Conta, Banco, Poupanca, ContaImposto }