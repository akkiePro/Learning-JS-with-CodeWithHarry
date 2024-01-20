class Employee {
    login() {
        console.log("Employee has logged in.");
    }
    logout() {
        console.log("Employee has logged out.");
    }
    requestLeaves(leaves) {
        console.log(`Employee has requested leave for ${leaves} days.`);
    }
}

class Programmer extends Employee {
    requestCoffee(x) {
        console.log(`Employee has requested ${x} coffees.`);
    }
    // method overriding
    requestLeaves(leaves) {
        // console.log(`Employee has requested ${leave + 1} leaves(one extra*).`);
        super.requestLeaves(leaves+1);
        console.log("one extra leave provided to programmer.");
    }
}

let e = new Programmer();
e.login();
e.requestLeaves(3);