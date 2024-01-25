// multiple exports(using commonjs)
const hello = () => {
    console.log("Hello!");
}

const advanceHello = (name) => {
    console.log("Hello " + name);
}

module.exports = {hello, advanceHello}; // same as below line
// module.exports = {hello: hello, advanceHello: advanceHello};
