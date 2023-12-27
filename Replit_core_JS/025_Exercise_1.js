let number = Math.floor(Math.random() * 101);
let chances = 0;
let userInput = undefined;
console.log(number);
do {
    userInput = prompt("Please guess");
    userInput = Number.parseInt(userInput);
    chances += 1;
    console.log(`guess${chances} => ${userInput}`)
    console.log(100 - chances);
} while(userInput!=number) {console.log("Score = " + (100-chances))};