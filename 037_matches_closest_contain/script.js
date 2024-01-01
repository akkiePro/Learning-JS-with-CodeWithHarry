let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(id1);
console.log(id1.matches(".box"));   // true
console.log(id1.matches("#id1"));   // true
console.log(id1.matches(".box2"));  // false

console.log(sp1.closest(".box"));   // checks: Is box ancestor(parent) of sp1? output: div#id1.box
console.log(sp1.closest("#bold1")); // null. bcz fails
console.log(sp1.closest("#sp1")); // passes and returns value for it.
if(sp1.closest("#id1"))
    id1.style.border = "2px solid black";

console.log(id1.contains(sp1)); // checks: Is sp1 child of id1? op: true
console.log(id1.contains(id1)); // still return true for itself
