// multiple exports(using ES6 modules)
export const hello = () => {
    console.log("Hello!");
}

export const advanceHello = (name) => {
    console.log("Hello " + name);
}
const akki = () => {
    console.log("Hello akki");
}
export default akki;