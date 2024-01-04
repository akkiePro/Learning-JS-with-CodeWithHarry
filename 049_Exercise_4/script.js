let count = 0;
let setTime = (e) => {
    let a = new Date();
    let s = a.getSeconds();
    let m = a.getMinutes();
    let h = a.getHours();
    let day = a.getDay();
    let month = a.getMonth() + 1;   // Months are zero-indexed, so add 1
    let year = a.getFullYear();
    console.log("year " + year);
    let secDiv = document.getElementById("sec");
    let minDiv = document.getElementById("min");
    let hourDiv = document.getElementById("hour");
    let date = document.getElementById("date");
    let h2S = document.createElement("h2");
    let h2M = document.createElement("h2");
    let h2H = document.createElement("h2");
    let h2D = document.createElement("h2");
    h2S.setAttribute("id", `h2Sec${s}`);
    h2M.setAttribute("id", `h2Min${m}`);
    h2H.setAttribute("id", `h2Hour${h}`);
    h2D.setAttribute("id", `dateH2`);
    h2S.innerHTML = s;
    h2M.innerHTML = m;
    h2H.innerHTML = h;
    combinedDate = day + " / " + month + " / " + year;
    h2D.innerHTML = combinedDate;
    removePreviousSec(s);
    removePreviousMin(m);
    removePreviousHour(h);
    ++count;
    // removePreviousDate(combinedDate, count);
    if(count>0 && document.getElementById("dateH2")){
        document.getElementById("dateH2").remove();
    }
    secDiv.insertAdjacentElement("afterbegin", h2S);
    minDiv.insertAdjacentElement("afterbegin", h2M);
    hourDiv.insertAdjacentElement("afterbegin", h2H);
    date.insertAdjacentElement("afterbegin", h2D);
};

function removePreviousHour(h) {
    if(h==0) {
        if(document.getElementById("h2Hour23")){
            document.getElementById("h2Hour23").remove();
        } else if (document.getElementById("h2Hour0")) {
            document.getElementById("h2Hour0").remove();
        }
    } else if (h > 0) {
        if(document.getElementById(`h2Hour${h-1}`)) {
            document.getElementById(`h2Hour${h-1}`).remove();
        } else if(document.getElementById(`h2Hour${h}`)) {
            document.getElementById(`h2Hour${h}`).remove();
        }
    }
}
function removePreviousMin(m) {
    if(m==0) {
        if(document.getElementById("h2Min59")){
            document.getElementById("h2Min59").remove();
        } else if (document.getElementById("h2Min0")) {
            document.getElementById("h2Min0").remove();
        }
    } else if (m > 0) {
        if(document.getElementById(`h2Min${m-1}`)) {
            document.getElementById(`h2Min${m-1}`).remove();
        } else if(document.getElementById(`h2Min${m}`)) {
            document.getElementById(`h2Min${m}`).remove();
        }
    }
}
function removePreviousSec(s) {
    if(s==0) {
        if(document.getElementById("h2Sec59")){
            document.getElementById("h2Sec59").remove();
        }
    } else if (s > 0) {
        if(document.getElementById(`h2Sec${s-1}`)) {
            document.getElementById(`h2Sec${s-1}`).remove();
        }
    }
}

let interval = setInterval(setTime, 1000);