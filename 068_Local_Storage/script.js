/**
 * same as cookie but with extra limit of storage.
 * limit up to 10 MB.
 * will work for all pages and sessions
 */

// 1.
/* console.log(localStorage.length);
// const key = encodeURIComponent(prompt("enter local storage key"));
// const value = encodeURIComponent(prompt("enter local storage value"));

// localStorage.setItem(key, value);

console.log(`key=${key} and value=${localStorage.getItem(key)}`);

if (key == "red" || key=="blue") {
    localStorage.removeItem(key);
}

// for (let i = 0; i < localStorage.length; i++) {
//     const element = localStorage.key(i);
//     console.log(element);
// }

console.log(localStorage); */


// 2.
// problem
const key = "myObject";
const value = {
    name: "akash",
    id: 1,
    hobby: "coding" 
};
localStorage.setItem(key, value);
console.log(localStorage.getItem(key));

// solution
const key1 = "myObject1";
const value1 = {
    name: "akash",
    id: 1,
    hobby: "coding" 
};
localStorage.setItem(key1, JSON.stringify(value1));
console.log(localStorage.getItem(key1));

// 3. we can also access via following
console.log(localStorage.user);
console.log(localStorage.myObject1);


// 4. clears all Local Storage
if (key == 0) {
    localStorage.clear();
}