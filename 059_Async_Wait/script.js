// 1. Intro to async:: by using async keyword we can use function as promise and we can use fun().then()
// /* async */ function myFun() {
//     return 2;
// }
// // if we remove async then error: myFun(...).then is not a function
// myFun().then((value) => {
//     console.log(value);
// });


// 2. Intro to await / not related function
/* async function weather() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("23 deg");
        }, 2000);
    });
    let bombayWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("25 deg");
        }, 5000);
    });

    // delhiWeather.then(alert);
    // bombayWeather.then(alert);
    console.log("fetching delhi weather please wait...");
    let dw = await delhiWeather;
    console.log("fetched delhi weather: " + dw);

    console.log("fetching bombay weather please wait...");
    let bw = await bombayWeather;
    console.log("fetched bombay weather: " + bw);

    return [dw, bw];
}

let normal_async_fun = async () => {
    console.log("I AM A NORMAL/ASYNC FUNCTION NOT RELATED TO WEATHER");
};

console.log("welcome to weather forcasting");
const all_weathers = weather();
normal_async_fun();
all_weathers.then((allValues) => {
    console.log(allValues);
}); */


// 3. related function
async function weather() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("23 deg");
        }, 2000);
    });
    let bombayWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("25 deg");
        }, 5000);
    });

    console.log("fetching delhi weather please wait...");
    let dw = await delhiWeather;
    console.log("fetched delhi weather: " + dw);

    console.log("fetching bombay weather please wait...");
    let bw = await bombayWeather;
    console.log("fetched bombay weather: " + bw);

    return [dw, bw];
}

async function related_fun() {
    console.log("I AM AN ASYNC FUNCTION RELATED TO WEATHER");
}

async function combine() {
    console.log("welcome to weather forcasting");
    await weather();
    await related_fun();
}
combine();