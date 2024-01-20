/**
 * problem with fill() is anybody can submit() without fill()
 */
class RailwayForm {
    // constructor() {} // this is default constructor provided by JS
    constructor(name, trainNo) {
        console.log("CONSTRUCTOR CALLED...");
        this.name = name;
        this.trainNo = trainNo;
        console.log(`Hi! ${this.name}, your form filled for train No.: ${this.trainNo}`);
    }
    submit() {
        alert(`Hi! ${this.name}, your form is submitted for train no.: ${this.trainNo}`);
    }
    cancel() {
        alert(`${this.name} this form is cancelled for train no.: ${this.trainNo}`);
    }
}

let akashForm = new RailwayForm("Akash", 123994);

let shrutiForm1 = new RailwayForm("Shruti", 994571);
let shrutiForm2 = new RailwayForm("Shruti", 546987);

akashForm.submit();

shrutiForm1.submit();
shrutiForm2.submit();
shrutiForm1.cancel();
