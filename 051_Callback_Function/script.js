// 1. aam zindagi
/* function loadScript(src) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    console.log("script loaded: "+ src);
  }
  document.body.appendChild(script);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"); */


// 2.mentos zindagi
// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   /* script.onload = () => {
//     console.log("script loaded: "+ src);
//     callback();
//   } */
//   script.onload = callback(); //i can use callback() direct also like this.
//   // document.body.appendChild(script);
//   document.head.append(script); // i can use this also to put script in head
// }
// function myScript() {
//   alert("myScript used");
// }
// function srcFun() {
//   alert("srcFun used");
// }
// // loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", myScript);
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", srcFun);


// 3. we can also pass parameters to the function
/* function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = callback(src);
  document.body.appendChild(script);
}
function srcFun(src) {
  alert("srcFun used: " + src);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", srcFun); */

// 4. error handling:: modify URL
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    console.log("script loaded: " + src);
    callback(null, src);
  };
  script.onerror = () => {
    console.log("error while loading script: " + src);
    callback(new Error("error occured"));
  };
  document.body.appendChild(script);
}
function srcFun(error, src) {
  if(error) {
    console.log(error);
    return;
  }
  alert("srcFun used: " + src);
}
loadScript("https://cdn.jsXYZABC123delivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", srcFun); // let's modify src to get error