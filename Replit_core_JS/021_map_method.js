let arr = [45, 23, 21]
// Array map method  :: Operatons on each element of array
console.log("works same as foreach")
arr.map((value) => {
  console.log(value)
});

console.log("works same as foreach but can also return a new array")
let incrementedArr = arr.map((i) => {
  return i + 1;
});
console.log(incrementedArr);// does it modify the original array?
console.log(arr);  // no, it does not modify the original array

console.log("has some extra params such as index and array");
let a = arr.map((value, index, array) => {
  console.log(value, index, array)
  return value + index
})