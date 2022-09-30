var Saudacao = /** @class */ (function () {
    function Saudacao(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    Saudacao.prototype.obterSaudacao = function (texto, destinatario) {
        return "".concat(texto, ", ").concat(destinatario);
    };
    return Saudacao;
}());
var s1 = new Saudacao("Oi", "Linda");
console.log(s1.obterSaudacao("Oi", "Linda"));
