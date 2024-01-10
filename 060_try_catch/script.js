// 1. problem
/* setTimeout(() => {
    console.log("hacking initiated...");
}, 1000);
console.log(rahul); // due to rahul we can't execute further
setTimeout(() => {
    console.log("target found...");
}, 2000);
setTimeout(() => {
    console.log("id fetched...");
}, 3000);
setTimeout(() => {
    console.log("id hacked...");
}, 4000); */


// 2. solution
/* setTimeout(() => {
    console.log("hacking initiated...");
}, 1000);
try{
    console.log(rahul);
}catch(err) {
    console.log("rahul is not defined. sorry");
}
setTimeout(() => {
    console.log("target found...");
}, 2000);
setTimeout(() => {
    console.log("id fetched...");
}, 3000);
setTimeout(() => {
    console.log("id hacked...");
}, 4000); */


// 3. problem of try{}catch{}: it don't work for async/scheduled function like following
/* try {
    setTimeout(() => {
        console.log(rahul); // this will throw an error after 3s
    }, 3000);
} catch (error) {
    console.log("rahul is not defined");
} */


// 4. solution
setTimeout(() => {
    try {
        console.log(rahul);
    } catch (error) {
        console.log("rahul is not defined");
    }
}, 3000);
