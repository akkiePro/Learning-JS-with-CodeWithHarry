// Q1. Create a Javscript class to create a complex number. Create a constructor to set the real and the complex part.
// Q2. Write a method to add two complex numbers in the above class.
/* class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
        // this.complexNum = `${this.real} + ${this.imaginary}i`;
    }
    display() {
        // console.log(`Your complex number is: ${this.complexNum}`);
        console.log(`Your complex number is: ${this.real} + ${this.imaginary}i`);
    }
    add(num) {
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
        
        return new ComplexNumber(this.real, this.imaginary);
    }
}
let num1 = new ComplexNumber(-2, -3);
num1.display();
let num2 = new ComplexNumber(-5, 21);
num2.display();

num1.add(num2);
console.log(`addition = ${num1.real} + ${num1.imaginary}i`); */




// Q3. Create a class student from a class human. Override a method and see changes.
// Q4. See if student is an instance of human using instanceof keyword.
class Human {
    walk() {
        console.log("I can walk.");
    }
    learn() {
        console.log("I'm learning by experience.");
    }
}
class Student extends Human {
    learn() {
        console.log("I'm learning by study.");
    }
}
let s = new Student();
s.learn();
console.log(s instanceof Human);



// by using getter-setter
// Q5. Use getters and setters to set and get the real and imaginary parts of the complex number.
class ComplexNumber {
    display() {
        console.log(`Your complex number is: ${this.real} + ${this.imaginary}i`);
    }
    add(num) {
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
        
    }
    set real(newReal) {
        this._real = newReal;
    }
    get real() {
        return this._real;
    }
    set imaginary(newImaginary) {
        this._imaginary = newImaginary;
    }
    get imaginary() {
        return this._imaginary;
    }
}
let num1 = new ComplexNumber();
num1.real = 2;
num1.imaginary = 4;
num1.display();

let num2 = new ComplexNumber();
num2.real = -3;
num2.imaginary = -15;
num2.display();

num1.add(num2);
console.log(`addition = ${num1.real} + ${num1.imaginary}i`);