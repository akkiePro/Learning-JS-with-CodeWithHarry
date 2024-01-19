class Animal {
    constructor(name) {
        this._name = name;
    }
    fly() {
        console.log("I can fly.");
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}

let a = new Animal("Bruno");
a.fly();
console.log(a.name);
a.name = "Jack";
console.log(a.name);