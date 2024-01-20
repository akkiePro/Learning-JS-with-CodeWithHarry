class RailwayForm {
    submit() {
        alert(`Hi! ${this.name}, your form is submitted for train no.: ${this.trainNo}`);
    }
    cancel() {
        alert(`${this.name} this form is cancelled for train no.: ${this.trainNo}`);
    }
    fill(name, num) {
        this.name = name;
        this.trainNo = num;
        console.log(`${this.name} your form is filled up for train no.: ${this.trainNo}`);
    }
}

let akashForm = new RailwayForm();
akashForm.fill("Akash", 123994);

let shrutiForm1 = new RailwayForm();
let shrutiForm2 = new RailwayForm();
shrutiForm1.fill("Shruti", 994571);

akashForm.submit();
shrutiForm1.submit();

shrutiForm2.fill("Shruti", 546987);
shrutiForm2.submit();
shrutiForm1.cancel();
