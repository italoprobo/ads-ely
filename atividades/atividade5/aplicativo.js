var Postagem = /** @class */ (function () {
    function Postagem(id, texto, quantidadeCurtidas) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = quantidadeCurtidas;
    }
    Postagem.prototype.curtir = function () {
        this.quantidadeCurtidas++;
    };
    Postagem.prototype.toString = function () {
        return this.texto + " " + this.quantidadeCurtidas;
    };
    return Postagem;
}());
var microblog = /** @class */ (function () {
    function microblog(array) {
        this.array = [];
        this.array = array;
    }
    microblog.prototype.inserir = function (Postagem) {
        this.array.push(Postagem);
    };
    microblog.prototype.excluir = function (numero) {
        var index = this.consultarIndex(numero);
        if (index != -1) {
            for (var i = index; i < this.array.length; i++) {
                this.array[i] = this.array[i + 1];
            }
            this.array.pop();
        }
    };
    microblog.prototype.consultar = function (numero) {
        var id;
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var posts = _a[_i];
            if (posts.id === numero) {
                id = posts;
                break;
            }
        }
        return id;
    };
    microblog.prototype.consultarIndex = function (numero) {
        var index = -1;
        for (var i = 0; i < this.array.length; i++) {
            if (this.array[i].id === numero) {
                index = i;
                break;
            }
        }
        return index;
    };
    microblog.prototype.maisCurtida = function () {
        var maisLikes = -1;
        var Post = this.array[0];
        for (var i = 0; i < this.array.length; i++) {
            if (this.array[i].quantidadeCurtidas > maisLikes) {
                maisLikes = this.array[i].quantidadeCurtidas;
                Post = this.array[i];
            }
        }
        return Post;
    };
    microblog.prototype.curtir = function (numero) {
        for (var i = 0; i < this.array.length; i++) {
            if (this.array[i].id === numero) {
                this.array[i].curtir();
            }
        }
    };
    return microblog;
}());
var post1 = new Postagem(1, "Bom dia!", 0);
var post2 = new Postagem(2, "Bom dia!", 0);
var postagens = new microblog([]);
postagens.inserir(post1);
postagens.inserir(post2);
postagens.curtir(2);
post2.curtir();
post2.curtir();
post2.curtir();
post2.curtir();
console.log(postagens.maisCurtida().toString());
console.log(postagens.array);
