// Array Methods
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string 
console.log(b, typeof b)

let c = num.join(" and ")
console.log(c, typeof c)

let p = num.pop() // pop returns the popped element
console.log(num, p)

let ps = num.push(56) // push returns the new array length
console.log(num, ps)

let s = num.shift()
console.log(s, num) // Removes an element from the start of the array

let us = num.unshift(78)  // Adds an element to the start of the array
console.log(us, num)
console.log(us)