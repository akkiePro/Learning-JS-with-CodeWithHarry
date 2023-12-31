/**
 * Note: to do following html code must be compressed in one line.
 */
console.log(document.body.firstChild);   // <h1>
a = document.body.firstChild;
console.log(a.parentNode);  // <body>
console.log(a.nextSibling);

/*  in a browser open devops tool and go to elements tab.
    now whichever line is selected is known as $0.
    select again that will be counted as $0 and 
    previous selected line will be known as $1.
    with using this also we can check parentNode or siblingNode.
*/
