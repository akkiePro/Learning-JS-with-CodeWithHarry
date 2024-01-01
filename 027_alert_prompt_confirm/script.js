alert("Welcome to Alert!");
let input = prompt("Enter input", 123);
input = Number.parseInt(input);
let write = confirm("would you like to print your entered value?");
if(write)
    document.write(input);
else
    document.write("please allow us to print value.");