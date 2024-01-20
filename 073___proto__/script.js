// 1. walking through __proto__
/* let a = {
    name: "Akash",
    language: "JavaScript"
}
console.log(a);

let p = {
    run: ()=> {
        alert("run");
    },
    post: "developer"
}

a.run(); // Uncaught TypeError: a.run is not a function */



// 2. intro of __proto__
/* let a = {
    name: "Akash",
    language: "JavaScript"
}
// console.log(a);

let p = {
    run: () => {
        alert("run");
    }
}

a.__proto__ = p;
a.run(); */



// 3. what if a already have an run()
/* let a = {
    name: "Akash",
    language: "JavaScript",
    run: () => {
        alert("self run");
    }
}
// console.log(a);

let p = {
    run: () => {
        alert("run");
    }
}

a.__proto__ = p;
a.run(); // self run */




// 4. can a access p's properties?
let a = {
    name: "Akash",
    language: "JavaScript",
    run: () => {
        alert("self run");
    }
}
// console.log(a);

let p = {
    run: () => {
        alert("run");
    },
    post: "developer"
}

p.__proto__ = {
    user: "akki"
}

a.__proto__ = p;
// a.run(); // self run
console.log(a.user);    // akki => first look for user in self(not found) > look in p's properties(not found) > loook in p's __proto__(found)
console.log(a.post);    // developer => first look for user in self(not found) > look in p's properties(found)
console.log(a.id);  // undefined => first look for user in self(not found) > look in p's properties(not found) > loook in p's __proto__(not found) > no further way(undefined)