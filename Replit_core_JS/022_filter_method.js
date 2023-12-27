// Array filter method  :: Need some filtered values
let arr2 = [45, 23, 21, 0, 3, 5];
console.log("values which are less than 10");
let a2 = arr2.filter((a) => {
  return a < 10;
})
console.log(a2, arr2);
console.log("also it didn't modified my original array");