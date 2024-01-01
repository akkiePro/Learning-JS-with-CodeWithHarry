const student = {
  id: 121,
  name: "John",
  age: 22,
  marks: {
    science: 70,
    maths: 75
  }
};
console.log(student)
console.log(student["id"])
console.log(typeof student)  // object
console.log(student.test)  // undefined
console.log(student.marks.science)  // 70
console.log(student.marks)

// demo2
console.log("demo2")
const item = {
"Harry": true,
"Shubh": false,
"Lovish": 67,
"Rohan": undefined
}
console.log(item["Harry"])  // true
console.log(typeof item)  // object