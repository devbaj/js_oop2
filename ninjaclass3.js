class Ninja {
    constructor(name, health=100) {
        this.name = name;
        this.health = health;
        this.strength = 3;
        this.speed = 3
    }

    sayName() {
        console.log(this.name);
        return this;
    }

    showStats() {
        console.log("Name:", this.name);
        console.log("Strength:", this.strength);
        console.log("Speed:", this.speed);
        console.log("Health:", this.health);
        return this;
    }
    
    drinkSake() {
        this.health += 10;
        return this;
    }

    punch(ninja){
        if (ninja instanceof Ninja) {
            ninja.health -= 5;
            console.log(ninja.name, "was punched by", this.name, "andlost 5 health");
        }
        else {
            console.log("You can only punch other Ninjas!");
            return false;
        }
    }
    
    kick(ninja) {
        if (ninja instanceof Ninja){
            var kickPower = this.strength * 5;
            ninja.health -= kickPower;
            console.log(ninja.name, "was kicked by", this.name, "and lost", kickPower, "health!");
		}
        else {
            console.log("You can only kick other ninjas!")
            return false;
        }
    }
}

class Sensei extends Ninja {
	constructor(name) {
		super(name, 200);
		this.wisdom = 10;
	}

	speakWisdom() {
		super.drinkSake();
		console.log("Never get involved in a land war in Asia.")
		return this;
	}
}

var ichika = new Ninja("Ichika");
ichika.sayName().showStats();
var nino = new Ninja("Nino");
nino.punch(ichika);
ichika.showStats;
nino.kick(ichika);
ichika.showStats();

var splinter = new Sensei("Master Splinter");
splinter.speakWisdom();
splinter.showStats();