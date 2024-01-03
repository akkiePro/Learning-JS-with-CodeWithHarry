let x = document.getElementsByTagName('span')[0]
console.log(x)  /* <span id="first" hidden=""><i>hey I am italic</i></span> */
let y = document.getElementsByTagName('span')[0]
console.dir(y)  // span#first
console.log(document.body.firstChild.nodeName); //#text
console.log(document.body.firstElementChild.nodeName); //SPAN
console.log(document.body.firstChild.data); // Hello world
console.log(document.body.firstChild.nodeValue); // Hello world

// first.innerHTML 
console.log(first.innerHTML); //<b>Hi</b>Hey I am span
first.innerHTML = "<i>hey I am italic</i>"

// first.outerHTML 
console.log(first.outerHTML); //<span id="first"><i>hey I am italic</i></span>

// first.outerHTML = "<div>hey</div>"
console.log(document.body.textContent);
/* op:
  Hello world
  hey I am italic
  another span
*/

second.hidden = false;