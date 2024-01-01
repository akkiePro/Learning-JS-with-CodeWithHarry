let userInput = document.getElementById("userInput");
userInput.addEventListener('keypress', function(event){
    if(event.keyCode === 13) {
        predict();
    }
});
function predict() {
    // let playAgain = false;
    // do {
        // const input = prompt("Choose : Snake/Water/Gun");
        let input = document.getElementById("userInput").value;
        console.log(input);
        if(input=="s" || input == "S" || input == "Snake" || input == "snake" || input == "SNAKE")
            input = "snake";
        else if(input=="w" || input == "W" || input == "Water" || input == "water" || input == "WATER")
            input = "water";
        else if(input=="g" || input == "G" || input == "Gun" || input == "gun" || input == "GUN")
            input = "gun";
        else 
            console.log("something went wrong");
        
        var options = ["snake", "water", "gun"];
        var randomIndex = Math.floor(Math.random() * options.length);
        var randomOption = options[randomIndex];
        console.log("Randomly chosen option:", randomOption);
    
        if(input == randomOption)
            alert("Draw");
        else if (input=="snake" && randomOption=="water")
            alert("you win");
        else if (input=="snake" && randomOption=="gun")
            alert("you lose");
        else if (input=="water" && randomOption=="snake")
            alert("you lose");
        else if (input=="water" && randomOption=="gun")
            alert("you win");
        else if (input=="gun" && randomOption=="snake")
            alert("you win");
        else if (input=="gun" && randomOption=="water")
            alert("you lose");
        else
            alert("Something went wrong.")
        
            document.getElementById("you").style.display = "block";
            document.getElementById("youSpan").innerHTML = input;
            
            document.getElementById("computer").style.display = "block";
            document.getElementById("compSpan").innerHTML = randomOption;
        // playAgain = confirm("Play again?");
    // }while(playAgain);

    document.getElementById("userInput").value = "";
    document.getElementById("myButton").innerHTML = "Play Again?";
}