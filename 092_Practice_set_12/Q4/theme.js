let bulb = document.getElementById("bulb");
bulb.addEventListener("click", () => {
    let fetchLink = document.getElementsByTagName("link")[2];
    // console.log(fetchLink);
    // console.log(fetchLink.getAttribute("href").endsWith("style.css"));
    if (fetchLink.getAttribute("href").endsWith("light-theme.css")) {
        fetchLink.setAttribute("href", "/092_Practice_set_12/Q4/dark-theme.css")
    }
    else {
        fetchLink.setAttribute("href", "/092_Practice_set_12/Q4/light-theme.css")
    }
})