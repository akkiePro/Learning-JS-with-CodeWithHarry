// 1. with .then()
/* let p = fetch("https://goweather.herokuapp.com/weather/nyc");
// let p = fetch("http://127.0.0.1:8080/joke-api/allJokes");
p.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    return response.json();
}).then((response) => {
    console.log(response);
}) */


// 2. with async/await
async function fetchingAPI() {
    let response = await fetch("https://goweather.herokuapp.com/weather/nyc");
    console.log(response);
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    const result = response.json();
    console.log("res", result); // returns a promise(reason: without await for json)
    return result;
}
async function apiResult() {
    let finalResult = await fetchingAPI();
    console.log("Final Result: ", finalResult); // now it won't return promise. it will return result because of await.
}
apiResult();