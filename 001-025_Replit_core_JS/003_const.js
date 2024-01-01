// why use const over let?
// const is like final in java
let a;
console.log(a)  // undefined
a = 12;
console.log(a)  //op=12
a = 23;
console.log(a)  //op=23

// const demo
console.log("const demo")
const b;  //not allowed(compilation error) : const must be initialized
const b = 22;
console.log(b)
b = 33;  // Runtime error: Assignemnt to constant variable
console.log(b)