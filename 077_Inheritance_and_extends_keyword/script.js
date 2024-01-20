class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    run() {
        console.log(`${this.name} is running.`);
    }
    shout() {
        console.log(`${this.name} is shouting.`);
    }
}

class Monkey extends Animal {
    eatBanana() {
        console.log(`${this.color} color monkey named ${this.name} is eating banana.`);
    }
}

let animal = new Animal("Bruno", "pink");
let monkey = new Monkey("Chimpu", "maroon");

animal.run();
monkey.shout();
monkey.eatBanana();
// animal.eatBanana(); // Uncaught TypeError: animal.eatBanana is not a function