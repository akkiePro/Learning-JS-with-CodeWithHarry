function repeatDots() {
    let init = document.createElement("span");
    init.innerHTML = ".";
    let outerbox = document.getElementById("main");
    outerbox.insertAdjacentElement("beforeend", init);
}
let promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let init = document.createElement("span");
            init.innerHTML = "Initializing hack program...";
            let outerbox = document.getElementById("main");
            resolve(1);
            outerbox.insertAdjacentElement("beforeend", init);
        }, 1000);
    })
}
promise().then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let init = document.createElement("span");
            init.innerHTML = "fetching Insta ID...";
            let outerbox = document.getElementById("main");
            resolve(2);
            outerbox.insertAdjacentElement("beforeend", init);
        }, 1000);
    });
}).then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let init = document.createElement("span");
            init.innerHTML = "loading...";
            let outerbox = document.getElementById("main");
            resolve(3);
            outerbox.insertAdjacentElement("beforeend", init);
        }, 2000);
    });
}).then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let init = document.createElement("span");
            init.innerHTML = "still loading...";
            let outerbox = document.getElementById("main");
            resolve(4);
            outerbox.insertAdjacentElement("beforeend", init);
        }, 3000);
    });
}).then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let init = document.createElement("span");
            init.innerHTML = "Shruti's Insta ID is @zingur1812";
            let outerbox = document.getElementById("main");
            resolve(5);
            outerbox.insertAdjacentElement("beforeend", init);
        }, 2000);
    });
}).then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let init = document.createElement("span");
            init.innerHTML = "connecting to instagram account";
            let outerbox = document.getElementById("main");
            resolve(6);
            outerbox.insertAdjacentElement("beforeend", init);
        }, 1000);
    });
}).then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        const dotInterval = setInterval(repeatDots, 100);
        resolve(7);
        setTimeout(() => {
            clearInterval(dotInterval);
        }, 3000);
    });
});
