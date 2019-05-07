function Ninja(name, health = 100) {
    this.name = name;
    this.health = health;
    var speed = 3;
    var strength = 3;

    this.sayName = function() {
        console.log(this.name);
        return this;
    }

    this.showStats = function() {
        console.log("Name:", this.name);
        console.log("Strength:", strength);
        console.log("Speed:", speed);
        console.log("Health:", this.health);
        return this;
    }

    this.drinkSake = function() {
        this.health += 10;
        return this;
    }
}

var ninja1 = new Ninja("Uesugi");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().showStats();