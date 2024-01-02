let first = document.getElementById("first");
let a = first.getAttribute("class");
console.log(a); // hey
console.log(first.hasAttribute("class")); //true
console.log(first.hasAttribute("style")); //false
first.setAttribute("hidden", "true"); 
first.setAttribute("class", "true sachin"); 
first.removeAttribute("class");
console.log(first.attributes);//NamedNodeMap {0: id, 1: data-game, 2: data-player, 3: hidden, id: id, data-game: data-game, data-player: data-player, hidden: hidden, length: 4}
console.log(first.dataset);//DOMStringMap {game: 'mario', player: 'harry'}
console.log(first.dataset.game);  //mario
console.log(first.dataset.player);  //harry