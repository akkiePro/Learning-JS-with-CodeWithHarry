// Q1. Write a program to show different alerts when different buttons are clicked.
let myBtn = document.getElementById("myBtn");
console.log(myBtn);
let entered = (e) => {
    alert("mouse entered");
};
let clicked = (e) => {
    alert("button clicked");
};
myBtn.addEventListener("mouseenter", entered);//after enter 
myBtn.addEventListener("click", clicked);//after click

// hover to button > press ENTER > click
//                   alert1        alert2