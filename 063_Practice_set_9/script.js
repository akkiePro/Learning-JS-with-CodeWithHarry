// Q1. write a program to load a javascript file in a browser using promises. Use .then() to display an alert when the load is complete.
const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve("script loaded");
        }
        script.onerror = () => {
            reject(new ReferenceError("problem with script or URL: " + src));
        }
        document.head.appendChild(script);
    });
}
// Q1. solution
/* loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js").then((success) => {
    console.log(success);    
}, (error) => {
    console.log(error);
}); */

// Q2. write the same program from previous question and use async/await syntax.
/* async function mainFun(params) {
    console.log(new Date().getMilliseconds());
    let awaitFun = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
    console.log(awaitFun);
    console.log(new Date().getMilliseconds());
}
mainFun(); */

// Q3. create a promise which rejects after 3 seconds. use an async/await to get its value. use a try catch to handle its error.
/* let p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("error fired"))
        }, 3000);
    });
}

let myFun = async () => {
    try {
        let ap1 = await p1();
        console.log(ap1);
    } catch(err) {
        console.log("error handled");
    }
}
myFun(); */



// Q4. write a program using promise.all() inside an async/await to await 3 promises. compare its results with the case where we await these promises one by one.
let pr1 =  () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("pr1");
        }, 2000)
    })
}
let pr2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("pr2");
        }, 1000)
    })
}
let pr3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("pr3");
        }, 3000)
    })
}

async function combined() {
    // takes 6s
    /* console.time("async")
    let apr1 = await pr1(); // with await
    let apr2 = await pr2(); // with await
    let apr3 = await pr3(); // with await
    console.log(apr1, apr2, apr3);
    console.timeEnd("async") */
    
    // takes 3s
    console.time("sync");
    let wpr1 = pr1();   // without wait
    let wpr2 = pr2();   // without wait
    let wpr3 = pr3();   // without wait
    let allP = await Promise.all([wpr1, wpr2, wpr3]);  // it will take less time because of parallel execution
    console.log(allP);
    console.timeEnd("sync");

}
combined();