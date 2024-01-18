// Q1. Use a free API from the internet and feed your app with live data.

const url = 'https://emojihub.yurace.pro/api/random';
const options = {
	method: 'GET',
};
const title = document.getElementById("title");

async function freeAPI() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        const h1 = document.createElement("h1");
        h1.innerHTML = result.htmlCode[0];
        h1.setAttribute("style", "font-size: 10rem")
        title.insertAdjacentElement("afterend", h1);
    } catch (error) {
        console.error(error);
    }
}
freeAPI();



// Q2. Create a note saving app which stores your note to localStorage.
// Q3. Repeat the last question and fetch the note which was saved.
// Q4. Delete the note in the previous question.