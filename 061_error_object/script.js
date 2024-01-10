// 1. Intro to error obj: er.name/er.message/er.stack
/* try {
    console.log(student);
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} */


// 2. throwing new Error
try {
    let age = prompt("Enter your age");
    age = Number.parseInt(age);
    if(age > 150)
        // throw new Error("This isn't probably true.");
        throw new ReferenceError("This isn't probably true.");
    console.log("age = " + age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
console.log("script is still running");