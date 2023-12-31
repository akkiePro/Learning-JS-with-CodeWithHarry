// Child nodes
console.log(document.body.childNodes);  // returns all child nodes as NodeList
let arr = Array.from(document.body.childNodes); // converted NodeList to Array
console.log(arr);
console.log(document.body.firstChild);  // returns written #text between <body> #text </body>
console.log(document.body.lastChild);   //  last child is <script>
console.log(document.body.childNodes[5]);   // it will return <b>

// following will always be true
console.log(document.body.firstChild === document.body.childNodes[0]);
console.log(document.body.childNodes[document.body.childNodes.length-1] === document.body.lastChild);

// following is to check for childNodes
console.log(document.body.hasChildNodes()); // true
console.log(document.body.childNodes[5].hasChildNodes());   // false  => true: if we write #text between <b></b>