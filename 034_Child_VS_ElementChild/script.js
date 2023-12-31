/**
 * Note: Not required to be in compressed 
 * version of html while using ElementChild
 */
a = document.body;
console.log(a.firstChild);  // #text of <body>
console.log(a.firstElementChild);   // actual next child element <h1>
console.log(a.lastElementChild);    // <script>
console.log(a.firstElementChild.nextElementSibling);    // <div>
console.log(a.firstElementChild.previousElementChild);  // undefined

console.log(a.children);    // all body child in HTMLCollection