const mybtn = document.getElementById("mybtn");

mybtn.onclick = () => {
    const dummy = document.createElement("h1");
    dummy.setAttribute("id", "dummy");
    dummy.innerHTML = "button clicked:h1";
    mybtn.insertAdjacentElement('afterend', dummy);
    
};
/* priority of .js file's onclick is higher than .html's */