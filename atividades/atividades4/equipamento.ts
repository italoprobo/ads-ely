class Equipamento{
    constructor (public ligado: boolean) {}

    liga(): void{
        if(this.estaLigado() === false){
            this.ligado = true
        }
    }

    desliga(): void{
        if(this.estaLigado() === true){
        this.ligado = false
        }
    }

    inverte(): void{
        if(this.ligado === true){
            this.ligado = false
        }else{
            this.ligado = true
        }
    }

    estaLigado(): boolean{
        return this.ligado
    }
}

let e1: Equipamento = new Equipamento(false)
console.log(e1.estaLigado())
e1.inverte()
console.log(e1.estaLigado())
e1.desliga()   
console.log(e1.estaLigado())
