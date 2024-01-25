/**
 * checkout cheatsheet of "https://regexr.com/"
 */

// problem
var str = "akki is very very nice very awesome guy.";
console.log(str.replace("very", "VERY"));   // akki is VERY very nice very awesome guy.
// only one occurence changed

// solution: regex
let regex = /very/g;    // g stands for global
console.log(str.replace(regex, "VERY"));    // akki is VERY VERY nice VERY awesome guy.

// some more regex example
// 1. ignore case sensitivity
let str2 = "akki is VERy veRY nice vEry awesome guy.";
regex = /very/gi;   // i stands for ignore case sensitive
console.log(str2.replace(regex, "GOOD"));   // akki is GOOD GOOD nice GOOD awesome guy.

// 2. 
let str3 = "akki is with lakki which is pakki baat.";
regex = /akki/g;
console.log(str3.replace(regex, "lucky"));  // lucky is with llucky which is plucky baat.

// 3. ignore same word
regex = /.akki/g;
console.log(str3.replace(regex, "lucky"));  // akki is with lucky which is lucky baat.

// 4. number allowed
let str4 = "akki is with lakki which is pakki baat. got it 6akki?";
regex = /\dakki/g;
console.log(str4.replace(regex, "lucky"));  // akki is with lakki which is pakki baat. got it lucky?

