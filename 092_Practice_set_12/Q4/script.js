// incomplete
// Q4. Write a simple interest calculator using JavaScript.
let buttons = document.querySelectorAll(".keySpan");
let display = document.getElementById("display");
let operations = document.getElementById("operations");
// let h3 = display.childNodes[3].firstElementChild;
let h3 = document.getElementById("typingArea").firstElementChild;
let plusOperator = document.getElementById("plusOperator");
let minusOperator = document.getElementById("minusOperator");
let output = document.getElementById("output");
let operators = document.getElementById("operators");
let plusCounter = 0;
let minusCounter = 0;
let result = 0;
console.log(plusOperator);


buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.getAttribute("class").includes("numKey")) {
            // reset opacity of operators
            Array.from(operators.children).filter((x) => {
                if(x.style.opacity > 0.2)
                    x.style.opacity = 0.2;
            });
            // console.log(button);
            // console.log(button.getAttribute("class"));
            let newClickedNumber = button.innerHTML;
            console.log(`button clicked: ${newClickedNumber}`);
            if(h3.innerHTML.length < 10) {
                console.log(h3.innerHTML);
                if(h3.innerHTML.length === 1 && h3.innerHTML == "0") {
                    if (newClickedNumber != "00") {
                        h3.innerHTML = newClickedNumber;
                        result += Number.parseFloat(h3.innerHTML);
                        console.log("result=" + result);
                    }
                }
                else {
                    let temp = Number.parseFloat(h3.innerHTML);
                    h3.innerHTML += newClickedNumber;
                    result += Number.parseFloat(h3.innerHTML) - temp;
                    console.log("result=" + result);
                }
                console.log(h3.innerHTML);
                output.innerHTML = result;
            }
        }

        if (button.getAttribute("id").includes("AC")) {
            console.clear();
            console.log("AC clicked");
            h3.innerHTML = "0";
            operations.innerHTML = "";
            plusCounter = 0;
            minusCounter = 0;
            result = 0;
            output.innerHTML = 0;
            Array.from(operators.children).filter((x) => {
                if(x.style.opacity > 0.2)
                    x.style.opacity = 0.2;
            });
        }
        if (button.getAttribute("id").includes("erase")) {
            console.log("Erase clicked");
            if(h3.innerHTML.length === 1 && h3.innerHTML != "0") {
                console.log("erased: " + h3.innerHTML);
                h3.innerHTML = "0";
            }
            if(h3.innerHTML.length > 1) {
                console.log("erased: " + h3.innerHTML.charAt(h3.innerHTML.length-1));
                h3.innerHTML = h3.innerHTML.substring(0, h3.innerHTML.length-1);
                result = result.toString() //.charAt(result.length-1)
            }
        }
        if (button.getAttribute("id").includes("plus")) {
            // console.log("Plus clicked");
            plusOperator.style.opacity = 1;
            if (h3.innerHTML != "0") {
                result = Number.parseFloat(h3.innerHTML);
                let operand = document.createElement("span");
                operand.setAttribute("id", "plus"+plusCounter);
                plusCounter++;
                operand.setAttribute("class", "plusOperator");
                operand.innerHTML = h3.innerHTML + " + ";

                h3.innerHTML = 0;
                operations.insertAdjacentElement("beforeend", operand);
            }
        }
        /* if (button.getAttribute("id").includes("minus")) {
            // console.log("Plus clicked");
            minusOperator.style.opacity = 1;
            if (h3.innerHTML != "0") {
                let operand = document.createElement("span");
                operand.setAttribute("id", "minus"+minusCounter);
                minusCounter++;
                operand.setAttribute("class", "minusOperator");
                operand.innerHTML = h3.innerHTML + " - ";

                h3.innerHTML = 0;
                operations.insertAdjacentElement("beforeend", operand);
            }
        } */
    })
});

// console.log(Array.from(buttons));
// console.log(buttons[0]);