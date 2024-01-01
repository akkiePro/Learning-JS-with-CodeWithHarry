// Q1. write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive!
// Q2. In Q1 use confirm to ask the user if he wants to see the prompt again.
// Q3. In the previous question, use console.error to log the error if the age entered is negative.
// let repeat = false;
// do {
//     let age = prompt("Please enter your age");
//     age = Number.parseInt(age);

//     if(age<0) 
//         console.error("Negative age not allowed.")
//     else {
//         const canDrive = (age) => {return age>=18 ? true : false};
//         if(canDrive(age))
//             alert("You can drive.");
//         else
//             alert("Sorry, you can't drive.");
//     }

//     repeat = confirm("would you like to check for another age?");
// }while(repeat);


// Q4. write a program to change the url to google.com (redirection) if user enters a number greater than 4.
// let input = prompt("Enter value");
// input = Number.parseInt(input);
// if(input>4)
//     location.href = "https://google.com";


// Q5. change the background of the page to yellow, red or any other color based on user input through prompt.
const color = prompt("Enter color");
document.body.style.background = color;