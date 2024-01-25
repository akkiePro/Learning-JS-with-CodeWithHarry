/* const sayHello = (name) => {
  console.log("Hello");
} */
// can be written as following...
const sayHello = name => console.log("Hello " + name);
sayHello("Akash");

// 1. working fine
/* const x = {
  name: "Akash",
  role: "JS Developer",
  exp: 3,
  show: function () {
    console.log(`The name is ${this.name}\nThe role is ${this.role}`);
  }
}
x.show(); */



// 2. problem with setTimeout()
/* const x = {
  name: "Akash",
  role: "JS Developer",
  exp: 3,
  show: function () {
    // console.log(this);  // this will refer as x
    setTimeout(function () {
      // console.log(this);  // this will refer as window object
      console.log(`The name is ${this.name}\nThe role is ${this.role}`);
    }, 2000);
  }
}
x.show(); */




// 3. traditional solution
/* const x = {
  name: "Akash",
  role: "JS Developer",
  exp: 3,
  show: function () {
    let that = this;
    setTimeout(function () {
      console.log(`The name is ${that.name}\nThe role is ${that.role}`);
    }, 2000);
  }
}
x.show(); */




// 4. new solution: arrow function
const x = {
  name: "Akash",
  role: "JS Developer",
  exp: 3,
  show: function () {
    setTimeout(() => {
      console.log(`The name is ${this.name}\nThe role is ${this.role}`);
    }, 2000);
  }
}
x.show();