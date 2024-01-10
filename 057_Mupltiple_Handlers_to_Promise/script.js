let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        alert("I'm not resolved yet.");
        resolve();
    }, 2000);
});

promise.then(() => {
    console.log("first handler");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 6000);
    });
}).then((value) => {
    console.log(value);  // wait for 6s to get inner handler's value
});

promise.then(() => {
    console.log("second handler");
});

promise.then(() => {
    console.log("final handler(No.3)");
});