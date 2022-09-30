class Saudacao{
    constructor(public texto: string, public destinatario: string) {}

    obterSaudacao(texto: string, destinatario: string): string{
        return `${texto}, ${destinatario}`
    }
}

let s1: Saudacao = new Saudacao("Oi", "Linda");
console.log(s1.obterSaudacao("Oi", "Linda"))