// Q1. Create a nav bar and change the color of its first element to red.
let firstElementOfNav = document.body.firstElementChild.firstElementChild.firstElementChild;
console.log(firstElementOfNav);
firstElementOfNav.style.color = "red";
// Q2. Create a table without tbody. Now use "view page source" button to check whether it has a tbody or not.
// no, bcz it shows raw data. but, <tbody> added automatically in Elements TAB of Inspect Elements.

// Q3. Create an element with 3 children. Now change the color of first and last element to green.
let parentDiv = document.getElementsByClassName("container")[1];
console.log(parentDiv.firstElementChild);
parentDiv.firstElementChild.style.color = "green";
parentDiv.lastElementChild.style.color = "green";


// Q4. Write a javascript code to change background of all <li> tags to cyan.
let li = document.getElementsByClassName("list-group-item");
Array.from(li).forEach((element) => {
    element.style.backgroundColor = "cyan";
});

/**
 * Q5. Which of the following is used to look for the farthest ancestor that matches a given CSS selector.
 * (a) matches (b) closest (c) contains (d) none of these
 * ANS: (d) none of these
 */
