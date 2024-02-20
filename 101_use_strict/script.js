"use strict";
let a = 45;
console.log(a);

// 1. demo1 of restriction after using "use strict"
d = 28; // not allowed because strict mode is on. 
// Uncaught ReferenceError: d is not defined


// 2. demo2 of restriction after using "use strict"
console.log(this);
function tryThis(num) {
    console.log(num);
    console.log(this);  // undefined. bcz in strict mode this can't be used inside function. 
}
tryThis(5);
let fun = () => {
    console.log(this);  // window object
};
fun();


/**
 * Note:
 * react uses strict mode by default.
 */ 