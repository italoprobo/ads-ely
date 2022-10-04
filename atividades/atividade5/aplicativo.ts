class Postagem {
    id: number
    texto: string
    quantidadeCurtidas: number

    constructor(id: number, texto: string, quantidadeCurtidas: number) {
        this.id = id
        this.texto = texto
        this.quantidadeCurtidas = quantidadeCurtidas

    }

    curtir(): void {
        this.quantidadeCurtidas++
    }

    toString(): string {
        return this.texto + " " + this.quantidadeCurtidas
    }

}

class microblog {
    array: Postagem[] = []

    constructor(array: Postagem[]) {
        this.array = array
    }

    inserir(Postagem: Postagem): void {
        this.array.push(Postagem)
    }
    
    excluir(numero: number): void {
        let index: number = this.consultarIndex(numero);
        if (index != -1) {
            for (let i: number = index; i < this.array.length; i++) {
            this.array[i] = this.array[i + 1];
        }
            this.array.pop();
        }
        }

    consultar(numero: number): Postagem {
        let id!: Postagem
        
        for (let posts of this.array) {
            if (posts.id === numero) {
            id = posts;
            break
            }
        }
        return id
    }

    consultarIndex(numero: number): number {
        let index: number = -1;
        for (let i: number = 0; i < this.array.length; i++) {
            if (this.array[i].id === numero) {
            index = i;
            break;
            }
        }
        return index;
    }

    maisCurtida(): Postagem {
        let maisLikes: number = -1;
        let Post: Postagem = this.array[0]

        for(let i = 0; i < this.array.length; i++) {
            if(this.array[i].quantidadeCurtidas > maisLikes) {
                maisLikes = this.array[i].quantidadeCurtidas
                Post = this.array[i]
            }
        }

        return Post
    }

    curtir(numero: number): void {
        for(let i = 0; i < this.array.length; i++) {
            if(this.array[i].id === numero) {
                this.array[i].curtir()
            }
        }
    }
}


let post1: Postagem = new Postagem(1, "Bom dia!", 0)
let post2: Postagem = new Postagem(2, "Bom dia!", 0)

let postagens: microblog = new microblog([])

postagens.inserir(post1)
postagens.inserir(post2)

postagens.curtir(2)
post2.curtir()
post2.curtir()
post2.curtir()
post2.curtir()

console.log(postagens.maisCurtida().toString())

console.log(postagens.array);