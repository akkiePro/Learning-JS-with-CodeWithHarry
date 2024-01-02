let first = document.getElementById("first");
let second = document.getElementById("second");

let dummy = document.createElement("h1");
dummy.setAttribute("id", "dummy");
dummy.innerHTML = "Dummy";

// first.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>'); // adds before start of #first
// first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>'); // adds before end of #first
// first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>');   // adds after start of #first
// first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>');    // adds after end of #first
// first.insertAdjacentHTML('afterend', dummy);    // print something weird

// first.insertAdjacentElement('beforebegin', second);   
// first.insertAdjacentElement('afterend', dummy);    

first.insertAdjacentText("beforebegin", "Simple text");

// first.remove()  // removes #first