// 1. finally
/* try {
    const zero = 0;
    // console.log(15+zero);    // success scenario
    console.log(one+zero);  // failure scenario
} catch (err) {
    console.log(err);
} finally {
    console.log("finally will run no matter what happens");
} */

/* 
question arise why we are writing finally above, 
bcz last console.log() we can write even without finally.
ans is simple. what if we mistake in catch block?
check below example.
*/


// 2. problem
/* try {
    const zero = 0;
    console.log(one+zero);
} catch (err) {
    console.log(err, one);  // fails again
}
console.log("finally will run no matter what happens"); // this won't be printed by JS */


// 3. solution
/* try {
    const zero = 0;
    console.log(one+zero);
} catch (err) {
    console.log(err, one);  // fails again
} finally {
    console.log("finally will run no matter what happens");
} */


// 4. where we can use finally?
/**
 * close the file at the end.
 * write in log file.
 * exit the loop.
 * etc. etc...
*/

// 5. example
function fun() {
    try {
        return 1;   // no chance of failure.
    } catch (err) {
        console.log(err);
    } finally {
        console.log("finally will run no matter what happens");
    }
}
fun();
