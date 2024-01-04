/* 
let h = a.getHours();
let m = a.getMinutes();
console.log(h + ":" + m + ":" + s); */
let setTime = (e) => {
    let a = new Date();
    let s = a.getSeconds();
    let m = a.getMinutes();
    console.log("m " + m);
    let secDiv = document.getElementById("sec");
    let minDiv = document.getElementById("min");
    let h2S = document.createElement("h2");
    let h2M = document.createElement("h2");
    h2S.setAttribute("class", `h2Time${s}`);
    h2S.setAttribute("id", `h2Sec${s}`);
    h2M.setAttribute("class", `h2Time${m}`);
    h2S.setAttribute("id", `h2Min${m}`);
    h2S.innerHTML = s;
    h2M.innerHTML = m;
    removePreviousSec(s);
    removePreviousSec(m);
    secDiv.insertAdjacentElement("afterbegin", h2S);
    minDiv.insertAdjacentElement("afterbegin", h2M);
};
function setCurrentTime(s) {

}
function removePreviousSec(t) {
    if (t == 0) {
        if (document.getElementsByClassName("h2Time59")) {
            // document.getElementsByClassName("h2Time59").remove();
            collectAndRemoveAllElements("h2Time59");
        } else if (document.getElementsByClassName("h2Time0")) {
            collectAndRemoveAllElements("h2Time0");
        }
    } else if (t > 0) {
        if (Array.from(document.getElementsByClassName(`h2Time${t - 1}`)).length === 0)
        // if (Array.isArray(document.getElementsByClassName(`h2Time${t - 1}`)) || document.getElementsByClassName(`h2Time${t - 1}`)) {
            // document.getElementsByClassName(`h2Time${t - 1}`).remove();
            collectAndRemoveAllElements(`h2Time${t - 1}`);
        } else if (Array.from(document.getElementsByClassName(`h2Time${t}`)).length === 0) {
        // } else if (Array.isArray(document.getElementsByClassName(`h2Time${t}`)) || document.getElementsByClassName(`h2Time${t}`)) {
            collectAndRemoveAllElements(`h2Time${t}`);
        }
    }
}
function collectAndRemoveAllElements(arg) {
    let allElements = Array.from(document.getElementsByClassName(arg));
    allElements.forEach(function (element) {
        element.remove();
    });
}
let resetSec = (e) => {

}
let interval = setInterval(setTime, 1000);