console.log("Hello World");
console.error("This is error");
console.assert(55>33);
console.assert(55<33);
console.warn("This is warning");
console.info("This is info");
console.time("a");
console.timeEnd("a");
console.time("forLoop");
console.count("count1");
for(let i=0; i<10000; i++)
  {
    let num = i;
  }
console.timeEnd("forLoop");
console.profile("Akash");
console.profileEnd("Akash");
let obj = {
  name: "Akash",
  Marks: {
    Sem1: {
      Maths: 90,
      Science: 80,
      English: 70
    },
    Sem2: {
      Maths: 95,
      Science: 85,
      English: 75
    }
  }
};
console.count("count1");
console.table(obj);
// console.clear();  // to clear the console.
console.countReset("count1");