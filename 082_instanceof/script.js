class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    eat() {
        console.log("Dog eats biscuits.");
    }
}

let a = new Dog("Bruno");
a.eat();
console.log(a.name);
let b = 56;

console.log(a instanceof Animal);
console.log(b instanceof Animal);
console.log(a instanceof Dog);
