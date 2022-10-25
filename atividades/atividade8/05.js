var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Produto = /** @class */ (function () {
    function Produto(indetificador, descrição, qtd_produto, valor_unitario) {
        this.indetificador = indetificador;
        this.descrição = descrição;
        this.qtd_produto = qtd_produto;
        this.valor_unitario = valor_unitario;
    }
    Produto.prototype.repor = function (valor) {
        this.qtd_produto += valor;
    };
    Produto.prototype.dar_baixa = function (valor) {
        this.qtd_produto -= valor;
    };
    Object.defineProperty(Produto.prototype, "quantidade_produto", {
        get: function () {
            return this.qtd_produto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "id", {
        get: function () {
            return this.indetificador;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "descricao", {
        get: function () {
            return this.descrição;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "valor_unidade", {
        get: function () {
            return this.valor_unitario;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
var ProdutoPerecivel = /** @class */ (function (_super) {
    __extends(ProdutoPerecivel, _super);
    function ProdutoPerecivel(indetificador, descrição, qtd_produto, valor_unitario, data_validade) {
        var _this = _super.call(this, indetificador, descrição, qtd_produto, qtd_produto) || this;
        _this.data_validade = data_validade;
        return _this;
    }
    ProdutoPerecivel.prototype.Date = function () {
        var data_atual = new Date();
        if (data_atual.getMilliseconds() > this.data_validade.getMilliseconds()) {
            return true;
        }
        else {
            return false;
        }
    };
    ProdutoPerecivel.prototype.repor = function (valor) {
        if (this.Date()) {
            _super.prototype.repor.call(this, valor);
        }
    };
    ProdutoPerecivel.prototype.dar_baixa = function (valor) {
        if (this.Date()) {
            _super.prototype.dar_baixa.call(this, valor);
        }
    };
    return ProdutoPerecivel;
}(Produto));
var Estoque = /** @class */ (function () {
    function Estoque() {
        this.estoque = [];
    }
    Estoque.prototype.consultar_id_por_conta = function (produto1) {
        if (this.estoque[0] === undefined) {
            return true;
        }
        else {
            for (var i = 0; i < this.estoque.length; i++) {
                if (produto1.id === this.estoque[i].id) {
                    break;
                }
                return true;
            }
        }
        return false;
    };
    Estoque.prototype.consultar_id_por_id = function (id) {
        if (this.estoque[0] === undefined) {
            return true;
        }
        else {
            for (var i = 0; i < this.estoque.length; i++) {
                if (id === this.estoque[i].id) {
                    break;
                }
                return true;
            }
        }
        return false;
    };
    Estoque.prototype.inserir = function (produto1) {
        if (this.consultar_id_por_conta(produto1)) {
            this.estoque.push(produto1);
        }
        else {
            console.log("Indisponivel!");
        }
    };
    Estoque.prototype.excluir = function (ids) {
        for (var i = 0; i < this.estoque.length; i++) {
            if (ids === this.estoque[i].id) {
                this.estoque.splice(0, i);
                break;
            }
        }
    };
    Estoque.prototype.repor = function (valor, id) {
        if (this.consultar_id_por_id(id)) {
            for (var i = 0; i < this.estoque.length; i++) {
                this.estoque[i].repor(valor);
            }
        }
        else {
            console.log("Indisponivel");
        }
    };
    Estoque.prototype.dar_baixa = function (valor, id) {
        if (this.consultar_id_por_id(id)) {
            for (var i = 0; i < this.estoque.length; i++) {
                this.estoque[i].dar_baixa(valor);
            }
        }
        else {
            console.log("Indisponivel");
        }
    };
    Estoque.prototype.listar_pereciveis_vencidos = function () {
        var lista = "";
        for (var i = 0; i < this.estoque.length; i++) {
            lista += "".concat(this.estoque[i].id, " ");
        }
        return lista;
    };
    return Estoque;
}());
var p1 = new Produto(123, 'massa', 6, 23);
var p2 = new Produto(321, 'massa dms', 6, 45);
p1.dar_baixa(5);
p2.repor(5);
var data_teste = new Date('2022-10-26');
var data_teste2 = new Date('2022-10-24');
var data_teste3 = new Date('2022-10-20');
var p3 = new ProdutoPerecivel(333, 'doidera', 10, 15, data_teste);
p3.repor(4);
p3.dar_baixa(3);
console.log(p3.quantidade_produto);
var p4 = new ProdutoPerecivel(444, 'doidera maxima', 10, 17, data_teste2);
p4.repor(7);
p4.dar_baixa(4);
console.log(p4.quantidade_produto);
var p5_sameid = new ProdutoPerecivel(444, 'doidera louca', 3, 22, data_teste3);
var e1 = new Estoque();
e1.inserir(p3);
e1.inserir(p4);
e1.inserir(p5_sameid);
console.log(e1.listar_pereciveis_vencidos());
