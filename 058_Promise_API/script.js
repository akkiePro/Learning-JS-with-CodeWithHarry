// 1. promises together
/* let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1");
    }, 1000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 2");
    }, 2000);
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3");
    }, 3000);
});
// after 1s
p1.then((value) => {
    console.log(value);
});
// after 2s
p2.then((value) => {
    console.log(value);
});
// after 3s
p3.then((value) => {
    console.log(value);
});
// all together but after 3s
let promises = Promise.all([p1, p2, p3]);
promises.then((value) => {
    console.log(value);
}) */


// 2. problem of Promise.all([]):: what if anyone is rejected():: Promise.allSettled([])
/* let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1");
    }, 1000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("value 2");  //rejected
    }, 2000);
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3");
    }, 3000);
});
let all_promise = Promise.all([p1, p2, p3]);
// all_promise don't work here
all_promise.then((allValue) => {
    console.log("all values")
    console.log(allValue);
});
// allSettled([]) provides values even after rejected any promise and also with status: fulfilled/rejected
let all_promise_settled = Promise.allSettled([p1, p2, p3]);
all_promise_settled.then((settledValue) => {
    console.log("settled values:")
    console.log(settledValue);
}); */


// 3. Promise.race([]):: whichever promise will execute first or win the race
/* let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1");
    }, 11000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("value 2");
        reject("value 2");  // what if qualifying promise is rejected? => you'll get error if you haven't handled.
    }, 2000);
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3");
    }, 8000);
});
let all_promise_race = Promise.race([p1, p2, p3]);
all_promise_race.then((raceValue) => {
    console.log("qualified race values:");
    console.log(raceValue);
}, (error) => {
    console.log("qualified error race values:");
    console.log(error);
}); */


// 4. Promise.any([]): whichever RESOLVED promise will execute first or win the race
/* let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1");
    }, 11000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("value 2");  // though this is qualifying but it's rejected so any() will ignore it.
    }, 2000);
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3");
    }, 3000);
});
let all_promise_any = Promise.any([p1, p2, p3]);
all_promise_any.then((anyValue) => {
    console.log("qualified any values:");
    console.log(anyValue);
}); */


// 5. Promise.resolve() and Promise.reject()
let resolvedPromise = Promise.resolve(5);
resolvedPromise.then((resolvedValue) => {
    console.log(resolvedValue);
})
let rejectedPromise = Promise.reject(new Error("rejected error..."));
rejectedPromise.catch((rejectedValue) => {
    console.log(rejectedValue);
})