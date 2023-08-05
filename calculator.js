let display = document.getElementById("display");
let previousEquation = document.getElementById("previousEquation");
const validOperations = ['+', '-', '*', '/', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function appendToDisplay(value) {
    if (display.textContent === "Error") {
        display.textContent = ""; // Clear the "Error" message
    }
const lastChar = display.textContent.slice(-1);

// If the last character is an operator and the new value is an operator, replace the last operator with the new one
    if (/[\+\-\*/]/.test(lastChar) && /[\+\-\*/]/.test(value)) {
        display.textContent = display.textContent.slice(0, -1) + value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    if (display.textContent){
        display.textContent = "";
    } else{
        previousEquation.textContent = "";
    } 
}

function calculate() {
    try {
        const expression = display.textContent;
        const result = evalExpression(expression);
        previousEquation.textContent = expression + " =";
        display.textContent = result;
    } catch (error) {
        display.textContent = "Error";
    }
}

function evalExpression(expression) {
    const sanitizedExpression = expression.replace(/[^\d+\-*/.]/g, "");
    return Function('"use strict"; return (' + sanitizedExpression + ")")();
}
function backSpace() {
    display.textContent = display.textContent.slice(0, -1);
}
function isValidOperation(key){
    return validOperations.includes(key);
}
document.addEventListener("keydown", function (event) {
    const keyPressed = event.key;
    if (keyPressed === "Enter") {
        event.preventDefault();
        previousEquation.textContent = display.value;
        calculate();
    }
    if (isValidOperation(keyPressed)){
        appendToDisplay(keyPressed);
    }
});