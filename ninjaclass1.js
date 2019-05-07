function Ninja(name, health = 100) {
    this.name = name;
    this.health = health;
    var speed = 3;
    var strength = 3;

    this.readStrength = function(){
        return strength;
    }

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

    this.punch = function(ninja) {
        if (ninja instanceof Ninja){
            ninja.health -= 5;
            console.log(ninja.name, "was punched by", this.name, "and lost 5 health!");
        }
        else {
            console.log("You can only punch other ninjas!");
            return false;
        }
    }

    this.kick = function(ninja) {
        if (ninja instanceof Ninja) {
            var kickPower = this.readStrength() * 5;
            ninja.health -= kickPower;
            console.log(ninja.name, "was kicked by", this.name, "and lost", kickPower, "health!");
        }
        else {
            console.log("You can only kick other ninjas!");
            return false;
        }
    }
}

var ichika = new Ninja("Ichika");
ichika.sayName();
ichika.showStats();
ichika.drinkSake().showStats();

var nino = new Ninja("Nino");

nino.punch(ichika);
ichika.showStats();

nino.kick(ichika);
ichika.showStats();