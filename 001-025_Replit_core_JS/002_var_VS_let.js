// why use let over var?
// demo1
console.log("demo1")
var a = 12
console.log(a)
var a = 23  // No Error in re-declaration
console.log(a)

// demo2
console.log("demo2")
var b = 22
{
  var b = 33  
  console.log(b)
}
console.log(b)  //b=33

demo3
console.log("demo3")
let c = 44
console.log(c)
let c = 55  // it will throw  compilation error while re-declaration
console.log(c)

// demo4
console.log("demo4")
let d = 66
{
  let d = 77
  console.log(d)
}
console.log(d)  //still d=66