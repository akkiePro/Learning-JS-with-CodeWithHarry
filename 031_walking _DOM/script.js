console.log(document.body);
console.log(document.documentElement);
console.log(document.title);
console.log(document.head);
console.log(document.links); //<a>
console.log(document.forms); //<form>
console.log(document.images); //<img>
console.log(document.scripts); //<script>
console.log(document.styleSheets); //<link rel="stylesheet" href="style.css">
console.log(document.URL); //returns the URL of the document ex. http://127.0.0.1/index.html
console.log(document.domain); //returns the domain of the URL ex. 127.0.0.1
//  `document.querySelector` and `document.getElementById` can also be used for document access
// examples
// querySelector
console.log(document.querySelector("#box1"));   // rerurn <div>
console.log(document.querySelector(".article1")); // selects first element which has class as article1
console.log(document.querySelector(".article1").firstChild); // returns #text of span
console.log(document.querySelectorAll(".article1"));    // selects all article1 as NodeList
// getElementById
console.log(document.getElementById("box1"));   // return a <div>
// getElementsByClassName
console.log(document.getElementsByClassName("article1"));   //return <span> and <p> as HTMLCollection
console.log(document.getElementsByClassName("article1")[1]);    // return <p>
// getElementsByTagName
console.log(document.getElementsByTagName("div"));
