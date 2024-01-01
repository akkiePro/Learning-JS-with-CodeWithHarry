// Q1. What will the following print in JavaScript?
// console.log("har\"".length)
console.log("har\"".length);

// Q2. Explore the includes, startsWith & endsWith functions of a string.
let sentence = "The quick brown fox jumps over the lazy dog.";
let word = "fox";
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
console.log(word.startsWith("bo"));
console.log(word.endsWith("ox"));

// Q3. Write a program to convert a given string to lowercase.
let str = "HELLO";
console.log(str.toLowerCase());

// Q4. Extract the amount out of this string "Please give Rs 1000"
let str2 = "Please give Rs 1000";
console.log(str2.slice(15));

// Q5. Try to change 4th character of a given string were you able to do it?
str2[3] = "x";
console.log(str2)  // str2 is not changed, because string is immutable