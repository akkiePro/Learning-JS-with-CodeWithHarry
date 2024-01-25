// 1. problem
/* let func = () => {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(456);
        }, 2000);
    });
};

let funcCall = async () => {
    let a = await func();
    console.log(a);

    let b = await func();
    console.log(b);
    
    let c = await func();
    console.log(c);
}

funcCall(); // we have to call this procedure */


// 2. solution
let func = () => {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(456);
        }, 2000);
    });
};

(async () => {
    let a = await func();
    console.log(a);

    let b = await func();
    console.log(b);
    
    let c = await func();
    console.log(c);
})();   // wrap using (procedure) and append () at the end.

// funcCall(); // no needed