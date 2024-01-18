// Q1. Use a free API from the internet and feed your app with live data.
// Q2. Create a note saving app which stores your note to localStorage.
// Q3. Repeat the last question and fetch the note which was saved.
// Q4. Delete the note in the previous question.
const btnSubmit = document.getElementById("btnSub");
const btnReset = document.getElementById("btnRst");
const input = document.getElementById("ip");
const tbody = document.getElementsByTagName("tbody")[0];

for (let i = 0; i < sessionStorage.length; i++) {
    const element = sessionStorage.key(i);
    if (element != "IsThisFirstTime_Log_From_LiveServer") {
        console.log(element);
        const tr = document.createElement("tr");
        tr.setAttribute("id", "tr"+i);
    
        const td_notes = document.createElement("td");
        td_notes.setAttribute("id", "td_notes"+i);
        td_notes.innerHTML = sessionStorage.getItem(element);
        
        const td_rmv = document.createElement("td");
        td_rmv.setAttribute("id", "td_rmv"+i);
        
        const removeBtn = document.createElement("button");
        removeBtn.setAttribute("id", element);
        removeBtn.setAttribute("class", "removeBtn");
        removeBtn.setAttribute("type", "reset");
        removeBtn.innerHTML = "remove";

        tbody.insertAdjacentElement("afterbegin", tr);
        const fixed_tr = document.getElementById("tr" + i);
        fixed_tr.insertAdjacentElement("beforeend", td_notes);
        fixed_tr.insertAdjacentElement("beforeend", td_rmv);

        const fixed_td_rmv = document.getElementById("td_rmv"+i);
        fixed_td_rmv.insertAdjacentElement("afterbegin", removeBtn);
    }
}

let count = sessionStorage.length == 0 ? sessionStorage.length : sessionStorage.length-1;
// submit
btnSubmit.onclick = () => {
    if (input.value != "") {
        console.log(input.value);
        const new_tr = document.createElement("tr");
        new_tr.setAttribute("id", "new_tr" + count);
        const new_td_notes = document.createElement("td");
        new_td_notes.setAttribute("id", "new_td_notes" + count);
        new_td_notes.innerHTML = input.value;

        const new_td_rmv = document.createElement("td");
        new_td_rmv.setAttribute("id", "new_td_rmv"+count);
        
        const new_removeBtn = document.createElement("button");
        new_removeBtn.setAttribute("id", "key"+count);
        new_removeBtn.setAttribute("class", "removeBtn");
        new_removeBtn.setAttribute("type", "reset");
        new_removeBtn.innerHTML = "remove";
        
        tbody.insertAdjacentElement("beforeend", new_tr);
        const fixed_tr = document.getElementById("new_tr"+count);
        fixed_tr.insertAdjacentElement("beforeend", new_td_notes);
        fixed_tr.insertAdjacentElement("beforeend", new_td_rmv);
        
        const fixed_td_rmv = document.getElementById("new_td_rmv"+count);
        fixed_td_rmv.insertAdjacentElement("afterbegin", new_removeBtn);

        sessionStorage.setItem("key"+count, encodeURIComponent(input.value));

        input.value = "";
        count++;
        location.reload();
    }
};

// reset
btnReset.onclick = () => {
    while (tbody.hasChildNodes()) {
        tbody.removeChild(tbody.firstChild);
      }
    sessionStorage.clear();
    location.reload();
};

// remove
let removeButtons = document.querySelectorAll('.removeBtn');

// Add click event listener to each button
removeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Access the id property of the clicked button
        let clickedButtonId = this.id;
        sessionStorage.removeItem(clickedButtonId);
        console.log(`${clickedButtonId} removed`);
        location.reload();
    });
});
