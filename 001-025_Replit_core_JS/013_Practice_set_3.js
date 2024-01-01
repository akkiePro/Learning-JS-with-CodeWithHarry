// Q1. Write a program to print the marks of a student in an object using for loop.
// obj = { harry: 98, rohan: 70, aakash: 7 }
const obj = {
  harry: 98,
  rohan: 70,
  aakash: 7
};
for(let i=0; i<Object.keys(obj).length; i++) 
  console.log("The marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]]);

// Q2. Write the program in Q1 using for in loop.
for(let i in obj) 
  console.log("The marks of " + i + " are " + obj[i]);

// Q3. Write a program to print "try again" until the user enters the correct number.
let ui = prompt("Enter number");
while(ui!=25) {
    console.log("try again");
    ui = prompt("try again");
}
console.log("You have entered correct number");

// Q4. Write a function to find mean of 5 numbers.
const mean = (a, b, c, d, e) => {
  return (a+b+c+d+e)/5;
}
console.log(mean(1,2,3,4,5));