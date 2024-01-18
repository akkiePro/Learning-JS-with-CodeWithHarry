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
// console.log(myBody);

// 1. one way(by then())
/* fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then((response) => response.json())
    .then((json) => console.log(json)); */

// 2. another way(by using async/await)
let fetchAPI = async () => {
    let statusAPI = await fetch('https://jsonplaceholder.typicode.com/posts', options);

    // console.log(statusAPI);
    // console.log(statusAPI.status);
    // console.log(statusAPI.ok);
    // console.log(statusAPI.headers);
    console.log(statusAPI.json()); 

    return statusAPI;
};
let fetchResponse = async () => {
    let response = await fetchAPI();
    console.log(response);
};
fetchResponse();