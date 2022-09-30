var player = /** @class */ (function () {
    function player(strength, level, cp) {
        this.strength = strength;
        this.level = level;
        this.cp = cp;
    }
    player.prototype.calculateDamage = function () {
        return this.strength * this.level;
    };
    player.prototype.attack = function (player_attacked) {
        if (player_attacked.alive()) {
            player_attacked.cp -= this.calculateDamage();
        }
    };
    player.prototype.alive = function () {
        if (this.cp > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    player.prototype.toString = function () {
        return "Strength = ".concat(this.strength, "\nLevel = ").concat(this.level, "\nCurrent Points = ").concat(this.cp, "\n");
    };
    return player;
}());
var emanuel = new player(4, 18, 100);
var italo = new player(7, 19, 100);
italo.calculateDamage();
emanuel.calculateDamage();
console.log(italo.toString());
console.log(emanuel.toString());
emanuel.attack(italo);
console.log(italo.toString());
console.log(emanuel.toString());
italo.attack(emanuel);
console.log(italo.toString());
console.log(emanuel.toString());
italo.attack(emanuel);
italo.attack(emanuel);
italo.attack(emanuel);
italo.attack(emanuel);
console.log(emanuel.alive());
console.log(italo.toString());
console.log(emanuel.toString());
