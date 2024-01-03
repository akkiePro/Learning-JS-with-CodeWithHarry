// Q2. Create a website which is capable of storing bookmarks of your favorite websites using href.
// Q3. Repeat Q2 using event listeners.
let input = document.getElementById("ip_txt1");
let bkmrkBtn = document.getElementById("bookmark");
let tbody = document.getElementsByTagName("tbody")[0];
let hoverToBookmark = (e) => {
    tbody.insertAdjacentHTML("beforeend", `<tr><td>${input.value}</td></tr>`);
};
let clickToSearch = (e) => {
    window.open(`https://${input.value}`, '_blank');
};
bkmrkBtn.addEventListener("mouseenter", hoverToBookmark);
bkmrkBtn.addEventListener("click", clickToSearch);