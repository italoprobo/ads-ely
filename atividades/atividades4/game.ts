class player{
    constructor(public strength: number, public level: number, public cp: number) {}

    calculateDamage(): number{
        return this.strength * this.level
    }

    attack(player_attacked: player): void{
        if(player_attacked.alive()){
        player_attacked.cp -= this.calculateDamage() 
        }
    }

    alive(): boolean{
        if(this.cp > 0){
            return true
        }else{
            return false
        }
    }

    toString(): string{
        return `Strength = ${this.strength}\nLevel = ${this.level}\nCurrent Points = ${this.cp}\n`
    }
}

let emanuel: player = new player(4, 18, 100)
let italo: player = new player(7, 19, 100)
italo.calculateDamage()
emanuel.calculateDamage()
console.log(italo.toString())
console.log(emanuel.toString())
emanuel.attack(italo)
console.log(italo.toString())
console.log(emanuel.toString())
italo.attack(emanuel)
console.log(italo.toString())
console.log(emanuel.toString())
italo.attack(emanuel)
italo.attack(emanuel)
italo.attack(emanuel)
italo.attack(emanuel)
console.log(emanuel.alive())
console.log(italo.toString())
console.log(emanuel.toString())