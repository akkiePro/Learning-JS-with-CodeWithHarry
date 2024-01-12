let p = fetch("https://goweather.herokuapp.com/weather/Curitiba");
// let p = fetch("http://127.0.0.1:8080/joke-api/allJokes");
p.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    return response.json();
}).then((response) => {
    console.log(response);
})