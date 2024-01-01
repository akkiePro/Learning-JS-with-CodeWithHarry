//  Q1. Create a variable of type string and try to add a number to it.
let a = "2"
let b = a + 3
console.log(b)
// Q2. Use typeof operator to find the datatype of the string in last question.
console.log(typeof b)
// Q3. Create a const object in javascript. Can you change it to hold a number later?
const student = {
  id: 121,
  name: "John",
  age: 22,
  marks: {
    science: 70,
    maths: 75
  }
};
student.age = 23
console.log(student)
// student = 12//Error: Assignment to constant variable.
console.log(student)
// Q4. Try to add a new key to the const object in Problem 3. Were you able to do it?
student.marks.english = 80
console.log(student)
// Q5. Write a JS program to create a word-meaning dictionary of 5 words.
const dict = {
  transmogrify: "to change (something) into something else",
  jollify: "to make someone feel or look like a jolly person",
  perspicuity: "the ability to see clearly",
  vibe: "the quality of being or tendency to be happy or optimistic",
  yakka: "work, especially hard work"
};
console.log(dict["yakka"])  // one way
console.log(dict.yakka)  // another way)