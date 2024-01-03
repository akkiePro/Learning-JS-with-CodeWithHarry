// Q2. Create a website which is capable of storing bookmarks of your favorite websites using href.
let input = document.getElementById("ip_txt1");
let bkmrkBtn = document.getElementById("bookmark");
let searchBtn = document.getElementById("search");
let tbody = document.getElementsByTagName("tbody")[0];


console.log(tbody);
console.log(bkmrkBtn);
bkmrkBtn.onclick = () => {
    let output = document.getElementById("output");
    output.hidden = false;
    tbody.insertAdjacentHTML("beforeend", `<tr><td>${input.value}</td></tr>`);
};
searchBtn.onclick = () => {
    window.location.href = `https://www.google.com/search?q=${input.value}`;
};