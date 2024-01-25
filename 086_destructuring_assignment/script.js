// traditional way
/* let arr1 = [3, 5];
let a1 = arr1[0];
let b1 = arr1[1];
console.log(a1, b1); */

// 1. destructuring
/* let arr2 = [3, 5];
let [a2, b2] = arr2;
console.log(a2, b2);    // 3 5 */

// 2. destructuring: what if added another element
/* let arr3 = [3, 5, 8];
let [a3, b3] = arr3;
console.log(a3, b3);    // 3 5 */

// 3. destructuring: what if we try to access variable which is not there
/* let arr4 = [3, 5, 8];
let [a4, b4, c4] = arr4;
console.log(a4, b4, c4, d4);    // Uncaught ReferenceError: d4 is not defined */


// 4. destructuring: ...rest
/* let arr5 = [3, 5, 8, 12, 15, 18];
let [a5, b5, c5, d5, ...rest] = arr5;
console.log(a5, b5, c5, d5, rest);    // 15 and 18 will be stored in rest as an array */

// 5. destructuring: skip
/* let arr6 = [3, 5, 8, 12, 15, 18];
let [a6, , , , ...rest] = arr6;     // 5 8 12 not stored in any variable
console.log(a6, rest);    // 3 (2) [15, 18] */

// 6. destructuring: {}
let {a, b} = {a:1, b:5};
console.log(a, b);    // 1 5

// read more about destructuring assignments:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment