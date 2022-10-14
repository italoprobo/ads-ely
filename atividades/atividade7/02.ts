class Hora{
    constructor(private horas: number, private minutos: number, private segundos: number) {}

    public ler_hora(): number{
        return this.horas
    }

    public ler_minutos(): number{
        return this.minutos
    }

    public ler_segundos(): number{
        return this.segundos
    }

    public hora_exata(): string{
        return `${this.horas}:${this.minutos}:${this.segundos}`
    }
}

let h1: Hora = new Hora(17,26,53)

console.log(h1.ler_hora())
console.log(h1.ler_minutos())
console.log(h1.ler_segundos())
console.log(h1.hora_exata())