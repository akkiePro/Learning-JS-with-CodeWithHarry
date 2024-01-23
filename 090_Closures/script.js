// 1. closure intro
function closure() {
  let name = "akash";
  let lName = "prajapati";
  function func() {
    console.log(name);
    // console.log(lName);
  }
  name = "akki";
  // lName = "pro";
  return func;  // if we return function then lexical environment is also returns along with it.
}
const x = closure();
x();  // op: akki


// 2. closure in nested function
function returnFunc() {
  const x = () => {
    let a = 1
    console.log(a)
    const y = () => {
      // let a = 2
      console.log(a)
      const z = () => {
        // let a = 3
        console.log(a)
      }
      z()
    }
    a = 999
    y()
  }
  return x
}

let a = returnFunc()
a()