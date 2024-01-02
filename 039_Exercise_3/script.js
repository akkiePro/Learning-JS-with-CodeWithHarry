import { joke } from './jokes.js';
// console.log(typeof joke);
const random = Math.floor(Math.random()*joke.length);
// console.log(joke.length);
// console.log(random);
let paragraph = document.body.children[1].firstElementChild.firstElementChild;
// console.log(paragraph);
// console.log(joke[random])
let lines = joke[random].split(/\n/g);

// console.log(joke[54])
// console.log(lines);
let wholeJoke = "";
for(let i in lines) {
    if(i%2==0) 
        wholeJoke += "<b>" + lines[i] + "</b><br>";
    else
        wholeJoke += lines[i] + "<br>";
}
// console.log(wholeJoke);
paragraph.innerHTML = wholeJoke;