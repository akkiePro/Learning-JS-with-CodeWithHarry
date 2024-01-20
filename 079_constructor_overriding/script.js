class Employee {
    constructor(name) {
        console.log(`${name} - Employee constructor called`);
    }
}

class Programmer extends Employee {
    // default constructor for child class if we don't write constructor
    /* constructor(...args) {
        super(...args);
    } */
    // overriden constructor
    constructor(name) {
        // if we skip super() keyword here JS will throw error. check by commenting it.
        super(name);
        console.log(`Programmer constructor called.`);
    }
}

let e = new Programmer("Akash");
