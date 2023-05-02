class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        return console.log(`${this.name}`)
    }

    showStats() {
        return console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    }

    drinkSake() {
        return this.health += 10
    }
}

class Sensei extends Ninja {
    constructor(name, health) {
        super(name, health)
        this.wisdom = 10
    }

    senseiName(){
        super.sayName()
    }

    speakWisdom(){
        super.drinkSake();
        return console.log("Hard boiled eggs in the morning are hard to beat.")
    }

    senseiStats() {
        return super.showStats() + console.log(`Wisdom: ${this.wisdom}`)
    }

}

const Brad = new Sensei("Brad", 75);
Brad.senseiName();
Brad.speakWisdom();
Brad.senseiStats();