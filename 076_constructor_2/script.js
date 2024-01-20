class RailwayForm {
    constructor(name, trainNo, address) {
        console.log("CONSTRUCTOR CALLED...");
        this.name = name;
        this.trainNo = Number.parseInt(trainNo);
        this.address = address;
        console.log(`Hi! ${this.name}, your form filled for train No.: ${this.trainNo}.`);
    }
    submit() {
        alert(`Hi! ${this.name}, your form is submitted for train no.: ${this.trainNo}.`);
        console.log(`ticket confirmed for ${this.address[1]}.`);
        console.log(`ticket will be deliverd at ${this.address[0]}.`);
    }
    cancel() {
        alert(`${this.name} this form is cancelled for train no.: ${this.trainNo}.`);
        console.log(`cancelled ticket from ${this.address[0]} to ${this.address[1]}.`);
    }
}

let akashForm = new RailwayForm("Akash", 123994, ["Ahmedabad", "Mahesana"]);

let shrutiForm1 = new RailwayForm("Shruti", "994571", ["Patna", "Ahmedabad"]);
let shrutiForm2 = new RailwayForm("Shruti", 546987, ["Surat", "Bihar"]);

akashForm.submit();

shrutiForm1.submit();
shrutiForm2.submit();
shrutiForm1.cancel();
