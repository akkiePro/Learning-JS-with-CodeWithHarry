let arr = [3, 5, 8];
let obj = {...arr};     // used to convert into object from an array.
console.log(obj);       // {0: 3, 1: 5, 2: 8}
console.log(obj[2]);    // 8

function sum(v1, v2, v3) {
    return v1 + v2 + v3;
}
console.log(sum(...arr));   // 16

let obj2 = {
    name: "Akash",
    company: "company XYZ",
    address: "XYZ"
}
// console.log(obj2);      // {name: 'Akash', company: 'company XYZ', address: 'XYZ'}
console.log({...obj2, name: "akki"}); //{name: 'akki', company: 'company XYZ', address: 'XYZ'}
// only name got changed and remaining details of obj2 persisted as it is

// ex.2
console.log({...obj2, address:"ABC", company:"company ABC"}); // {name: 'Akash', company: 'company ABC', address: 'ABC'}

// wrong way to use
console.log({name: "akki", ...obj2}); //{name: 'Akash', company: 'company XYZ', address: 'XYZ'}
// obj2 overwritten, that's why akki didn't displayed

// read more about spread syntax
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax