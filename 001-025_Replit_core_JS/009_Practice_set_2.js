// Q1. Use logical operators to find whether the age of a person lies between 10 and 20?
let age = prompt("What is your age?")
age = Number.parseInt(age)
if(age>10 && age<20){
  alert("Your age lies between 10 and 20")
}
// Q2. Demonstrate the use of switch case statements in JavaScript.
let day = "Friday";
switch(day){
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}
// Q3. Write a JavaScript program to find whether a number is Divisible by 2 and 3.
let num = prompt("Enter a number");
num = Number.parseInt(num);
if(num%2==0 && num%3==0) {
  console.log("Number is divisible by 2 and 3");
}
// Q4. Write a JavaScript program to find whether a number is Divisible by either 2 or 3.
if(num%2==0 || num%3==0) {
  console.log("Number is divisible by either 2 or 3");
}
// Q5. Print "You can Drive" or "You cannot Drive" based on age being greater than 18 using termary operator.
console.log("You can", (age>18? "drive" : "not drive"));