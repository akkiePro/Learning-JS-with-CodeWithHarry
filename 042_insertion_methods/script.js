let a = document.getElementsByTagName('div')[0].firstElementChild;

// a.innerHTML = a.innerHTML + '<h1>hello world</h1>'; // inside #first after #first's #text

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';
// a.append(div);   // inside #first after #first's #text
// a.prepend(div);  // inside #first but before #first's #text
// a.before(div);  // outside #first, inside .container and after .container's #text
// a.after(div);   // outside #first, inside .container and after #first
a.replaceWith(div); // replace with #first