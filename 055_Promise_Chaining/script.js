let p1 = new Promise((resolve, reject) => {
  console.log("promise pending...")
  setTimeout(() => {
    console.log("resolved in 2 sec");
    resolve(56);
  }, 2000);
});

p1.then((p1Value) => {
  console.log(p1Value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2");
    }, 2000);
  });
  return p2;
}).then((p2Value) => {
  console.log("p2Value:", p2Value, "we are done.");
  return 2; // convert this constant value(2) to promise.
}).then((p3Value) => {
  console.log("p3Value:", p3Value, "pakka done.");
});