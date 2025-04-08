let calculator = document.querySelector(".calculator");
let screen = document.querySelector(".screen");
let buffer = 1;
let operator = "+";
let first = true;
let old = "";

calculator.addEventListener("click", function(event) {
    input = event.target.innerText;

    if (isNaN(parseInt(input))) {
        old = operator;
        operator = input;
        computeResult();
    }
    else {
        updateScreen(input);
    }
});

function updateScreen(number) {
    if (screen.innerText == "0") {
        screen.innerText = number.toString();
    }
    else {
        screen.innerText += number.toString();
    }
}

function computeResult() {
    let number = parseInt(screen.innerText);
    console.log(`number that was on the screen: ${number} `);
    console.log(` buffer before operations: ${buffer}`);
    switch (operator) {
        case "+":
            if (first) {
                buffer--;
                first = false;
            }
            buffer += number;
            screen.innerText = "0";
            break;

        case "-":
            if (first) {
                buffer--;
                first = false;
            }
            buffer = buffer - number
            screen.innerText = "0";
            break;

        case "x":
            buffer = number * buffer;
            screen.innerText = "0";
            break;
        case "÷":
            break;
        case "C":
            screen.innerText = "0";
            buffer = 1;
            first = 1;
            operator = "+"
            break;
        default:
            operator = old;
            computeResult();
            screen.innerText = buffer.toString();
            break;
    }
    console.log(` buffer after operations: ${buffer}`);
}
