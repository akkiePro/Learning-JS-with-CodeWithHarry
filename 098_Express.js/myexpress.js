/**
 * step1: type following command to work with express.js
 * => npm install express --save
 */
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.get('/map', (req, res) => {
    console.log(req.query.name);
    res.send('Map')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

/**
 * pro tip:
 * use below command to save time of turn on/turn off server everytime on every change of servers(backends)
 * => npm i -g nodemon
 * nodemon listens changes of server side logic and automatic restarts server whenever it find changes.
 * now, to run your server apk use nodemon instead of node.
 * example,
 * => nodemon .\myexpress.js
 */