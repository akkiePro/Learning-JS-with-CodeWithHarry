// 1. Hoisting scenario 1
greet();    // call before declaration(workd fine)
function greet() {
  console.log("Good morning");
}

// above mentioned scenario hoisting like following
// /* 
// function greet() {
//     console.log("Good morning");
// }
// greet(); */




// 2. Hoisting scenario 2(i)
/* console.log(a); // used bbefore declaration
var a; */




// 3. Hoisting scenario 2(ii) : issue with initalization
/* console.log(a); // even after initialized shows as undefined
var a=15; */

// Declaration hoisted to the top but initialization is not
// how it hoisted? see following...
// /* var a;
// console.log(a);
// a=15; */



// 4. Hoisting scenario 2(iii) : with let and const
/* 
console.log(a); // won't print
// let a;  // not allowed
let a = 15; // Uncaught ReferenceError: Cannot access 'a' before initialization
 */

// Note don't work with let as it worked with var
// same for const as well




// 5. Hoisting scenario 3 : not allowed for assigned functions as well as arrow functions
/* greet();    // Uncaught TypeError: greet is not a function
var greet = function() {
  console.log("Good morning");
} */


/**
 * Important Note: try to declare functions and variables 
 * at the top of module or js file to avoid hoiting issues.
 */ 