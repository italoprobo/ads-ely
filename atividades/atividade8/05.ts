class Produto{

    private indetificador: number;
    private descrição: string;
    private qtd_produto: number;
    private valor_unitario: number;

    constructor(indetificador: number, descrição: string, qtd_produto: number, valor_unitario: number){
        this.indetificador = indetificador;
        this.descrição = descrição;
        this.qtd_produto = qtd_produto;
        this.valor_unitario = valor_unitario;
    }

    public repor(valor: number): void{
        this.qtd_produto += valor;
    }

    public dar_baixa(valor: number): void{
        this.qtd_produto -= valor;
    }

    get quantidade_produto(){
        return this.qtd_produto;
    }

    get id(){
        return this.indetificador;
    }

    get descricao(){
        return this.descrição;
    }

    get valor_unidade(){
        return this.valor_unitario;
    }
}

class ProdutoPerecivel extends Produto{

    private data_validade: Date;

    constructor(indetificador: number, descrição: string, qtd_produto: number, valor_unitario: number, data_validade: Date){
        super(indetificador, descrição, qtd_produto, qtd_produto);
        this.data_validade = data_validade;
    }

    public Date(): boolean{
        let data_atual: Date = new Date();
        if(data_atual.getMilliseconds() > this.data_validade.getMilliseconds()){
            return true
        }else{
            return false
        }
    }

    public repor(valor: number): void{
        if(this.Date()){
            super.repor(valor)
        }
    }

    public dar_baixa(valor: number): void{
        if(this.Date()){
            super.dar_baixa(valor)
        }
    }
    
}


class Estoque {

    private estoque: ProdutoPerecivel[] = []

    private consultar_id_por_conta(produto1: ProdutoPerecivel): boolean {
        if(this.estoque[0] === undefined) {
            return true
        } else {
            for(let i = 0; i < this.estoque.length; i++){
                if(produto1.id === this.estoque[i].id) {
                break;
            }
            return true
        }
        }  
        return false
    }

    private consultar_id_por_id(id: number): boolean {
        if(this.estoque[0] === undefined) {
            return true
        } else {
            for(let i = 0; i < this.estoque.length; i++){
                if(id === this.estoque[i].id) {
                break;
            }
            return true
        }
        }  
        return false
    }
    

    public inserir(produto1: ProdutoPerecivel){
        if(this.consultar_id_por_conta(produto1)){
            this.estoque.push(produto1)
        }else{
            console.log("Indisponivel!")
        }
    }

    public excluir(ids: number){
        for(let i = 0; i < this.estoque.length; i++) {
            if(ids === this.estoque[i].id){
                this.estoque.splice(0, i)
                break;   
            }
        }
    }

    public repor(valor: number, id: number){
        if(this.consultar_id_por_id(id)){
        for(let i = 0; i < this.estoque.length; i++) {
            this.estoque[i].repor(valor);
        }  
        }else{
            console.log("Indisponivel")
        }
    }

    public dar_baixa(valor: number, id: number){
        if(this.consultar_id_por_id(id)){
        for(let i = 0; i < this.estoque.length; i++) {
            this.estoque[i].dar_baixa(valor);
        }
        }else{
            console.log("Indisponivel")
        }
    }


    public listar_pereciveis_vencidos(): string{
        let lista: string = ``
        for(let i = 0; i < this.estoque.length; i++) {
            lista += `${this.estoque[i].id} `
        }  
        return lista
    }
}

let p1: Produto = new Produto(123, 'massa', 6, 23)
let p2: Produto = new Produto(321, 'massa dms', 6, 45)
p1.dar_baixa(5)
p2.repor(5)

const data_teste = new Date('2022-10-26')
const data_teste2 = new Date('2022-10-24')
const data_teste3 = new Date('2022-10-20')

let p3: ProdutoPerecivel = new ProdutoPerecivel(333, 'doidera', 10, 15, data_teste)
p3.repor(4)
p3.dar_baixa(3)
console.log(p3.quantidade_produto);
let p4: ProdutoPerecivel = new ProdutoPerecivel(444, 'doidera maxima', 10, 17, data_teste2)
p4.repor(7)
p4.dar_baixa(4)
console.log(p4.quantidade_produto);
let p5_sameid: ProdutoPerecivel = new ProdutoPerecivel(444, 'doidera louca', 3, 22, data_teste3)

let e1: Estoque = new Estoque()
e1.inserir(p3)
e1.inserir(p4)
e1.inserir(p5_sameid)
console.log(e1.listar_pereciveis_vencidos());