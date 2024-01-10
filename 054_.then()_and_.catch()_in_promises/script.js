// 1. how promise looks?
/* let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        alert("I'm a promise and I'm fulfilled");
    }, 5000);
}); */



// 2. Resolve and Reject
// resolved
/* let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true);
        alert("I'm a promise and I'm resolved");
        console.log(promise1);
    }, 5000);
});
console.log(promise1);

//rejected
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("I'm an error"));
        alert("I'm a promise and I'm rejected");
        console.log(promise2);
    }, 5000);
});
console.log(promise2);

console.log(promise1, promise2);    // not both will take 10s both will work parallely and finishe execution in total 5s.
 */


// 3. .then() and .catch()
/* let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true);
    }, 3000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("I'm an error"));
    }, 3000);
});

p1.then((value) => {
    console.log(value);
});
// error handling
p2.catch((error) => {
    console.log("some error occured in p2");
}); */


// 4. .then() with .catch()
let myPromise = new Promise((resolve, reject) => {
    console.log("pending... please wait...");
    setTimeout(() => {
        // resolve(true);
        reject(new Error("I'm an error"));
    }, 3000);
});

myPromise.then((x) => {
    console.log(x);
}, (error) => {
    console.log("some error occured...");
});