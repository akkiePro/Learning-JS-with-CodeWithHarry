// Q4. Write a javascript program to keep fetching contents of a website (every 5 seconds).
// Q5. Create a glowing bulb effect using classlist toggle method in javascript.
let stopBtn = document.getElementById("stopBtn");
let fetchContent = async (url) => {
    con = await fetch(url);
    let a = await con.json();
    return a;
};
let interval = setInterval(async function(){
    let url = `https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random()*1000)}`;
    console.log(await fetchContent);

    let h3 = document.createElement("h3");
    h3.innerHTML = "look console";
    stopBtn.insertAdjacentElement("afterend", h3);

}, 3000);

stopBtn.onclick = () => {
    clearInterval(interval);
    stopBtn.innerHTML = "stopped";
};