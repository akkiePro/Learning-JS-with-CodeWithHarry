console.log("Q1. Create an array of numbers and take input from the user to add numbers to this array");
console.log("Q2. Keep adding numbers to the array in Q1 until 0 is added to the array");
let arr = [16,2,30,4,50,6,10,350];
let ip;
do {
    ip = prompt("enter ip");
    ip = Number.parseInt(ip);
    arr.push(ip);
    console.log(arr + " \t::\t ip = " + ip);
} while(ip!=0);



console.log("\n\nQ3. Filter for numbers divisible by 10 from a given array");
console.log("divisible by 10 ", arr.filter((val)=>{
    return val%10==0;
}))



console.log("\n\nQ4. Create an array of square of given numbers");
let arr2 = [1,2,3,4,5];
console.log( arr2.map(   (val) => { return val*val }   ) );



console.log("\n\nQ5. Use reduce to calculate factorial of a given number from an array");
console.log( arr2.reduce(   (val1,val2) => { return val1*val2 }   ) );