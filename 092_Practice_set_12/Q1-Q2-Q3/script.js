/* Q1. Write a JavaScript program to print the following after 2 second delay: 
Hello 
World */
let a = async (word) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(word);
    }, 2000);
  })
}
(async () => {
  let text = await a("Hello");
  console.log(text);
  text = await a("World");
  console.log(text);
})()


// Q2. Write a JavaScript program to find the average of numbers in an array using spread syntax.
let average = (a, b, c) => {
  let avg = (a+b+c) / 3;
  console.log(avg);
}
let arr = [1, 6, 5];
average(...arr);




// Q3. Write a JavaScript function which resolves a promise after n seconds. The function takes n as the parameter. Use an IIFE to execute the funciton with different values of n.
let func = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
      
    }, n);
  })
}
(async() => {
  let x = await func(4004);
  console.log(x);
})()

// Q4. Write a simple interest calculator using JavaScript.