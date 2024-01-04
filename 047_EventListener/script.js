let myBtn = document.getElementById("myBtn");
// learning1
/* let x = (e) => {
    alert("button clicked:1");
}
let y = (e) => {
    alert("button clicked:2");
}

myBtn.addEventListener("click", x);
myBtn.addEventListener("click", y);

let ip = Number.parseInt(prompt("enter 1 to remove event x"));
if(ip == 1)
    myBtn.removeEventListener("click", x); */

// learning2
myBtn.addEventListener("mouseenter", function(e){
    console.log("entered");
    console.log(e.target);
    console.log(e.type);
    console.log(e.currentTarget);
    console.log(e.clientX, e.clientY);  // shows axes where user entered on screen
    
});