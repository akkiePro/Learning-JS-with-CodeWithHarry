let bulb = document.getElementById("bulb");
let count = 0;
bulb.onclick = () => {
    count++;
    document.body.classList.toggle("light-theme");
    if(count%2==1)
        bulb.setAttribute("class", "fa-regular fa-lightbulb");
    else
        bulb.setAttribute("class", "fa-solid fa-lightbulb");

};