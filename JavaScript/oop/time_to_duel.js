class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor (name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    readCard() {
        return console.log(`Name: ${this.name}, Cost: ${this.cost}, Power: ${this.power}, Resilience: ${this.res}`)
    }

    attack(target){
        target.res -= this.power
    }
}


class Effect extends Card {
    constructor (name, cost, text, stat, mag) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }

    readCard(){
        return console.log(`Name: ${this.name}, Cost: ${this.cost}, Text: ${this.text}, Stat: ${this.stat}, Magnitude: ${this.mag}`)
    }

    play(target) {
        if (this.stat == "resilience"){
            target.res += this.mag
        }
        else {
            target.power += this.mag
        }
    }

}

const red = new Unit("Red Belt Ninja", 3, 3, 4)
const hard = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3)
hard.play(red)
const black = new Unit("Black Belt Ninja", 4, 5, 4)
const unhandled = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)
unhandled.play(red)
const pair = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)
pair.play(red)
red.attack(black)
black.readCard()



