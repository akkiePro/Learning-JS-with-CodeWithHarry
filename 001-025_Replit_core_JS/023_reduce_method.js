// Array reduce method :: Operation on EVERY elements of array with eachother
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("provide sum of all elements of array");
const reduce_func = (h1, h2) => {
  return h1 + h2;
}
let newarr3 = arr3.reduce(reduce_func)
console.log(arr3.join(" + ") + " = " + newarr3)