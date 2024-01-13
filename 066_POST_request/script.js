const myBody = JSON.stringify({
    title: "uk",
    body: "lon",
    userId: 2
});
const myHeader = {
    'Content-type': 'application/json; charset=UTF-8',
}
const options = {
    method: "POST",
    body: myBody,
    headers: myHeader
}
console.log(myBody);
fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then((response) => response.json())
    .then((json) => console.log(json));