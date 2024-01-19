class Greet {
    constructor(name) {
        this.name = Greet.capitalize(name);
    }
    hello() {
        alert(`Hello! ${this.name}...`);
    }
    static capitalize(val) {
        return val.charAt(0).toUpperCase().concat(val.substr(1, val.length));
    }
}
let guy = new Greet("akash");
guy.hello();