let answer = 0;
let previous = "";
let string = "";
let operator = "";
let mode = 0;
let outputBottom = document.querySelector('.outputBottom');
let outputTop = document.querySelector('.outputTop');
let clearButton = document.querySelector('button#clear');
let numbers = document.querySelectorAll('#number');
let equals = document.querySelector('#equals');
let plusOp = document.querySelector('#plus');
let subtractOp = document.querySelector('#subtract');
let multiplyOp = document.querySelector('#multiply');
let divideOp = document.querySelector('#divide');

function clear(){
    answer = 0;
    document.querySelector('.outputBottom').textContent = answer;
    document.querySelector('.outputTop').textContent = "";
    string = "";
}
function addNumber(){
    operator = "+";
    mode = 1;
    outputBottom.textContent = string + operator;
}
function subNumber(){
    operator = "-";
    mode = 2;
    outputBottom.textContent = string + operator;
}
function mulNumber(){
    operator = "×";
    mode = 3;
    outputBottom.textContent = `${string} ${operator}`;
}
function divNumber(){
    operator = "÷";
    mode = 4;
    outputBottom.textContent = string + operator;
}
function equalsSign(){
    outputTop.textContent = string;
    string = "";
    outputBottom.textContent = answer;
}
function numberSetup(){
    string += this.textContent;
    outputBottom.textContent = string;
}
numbers.forEach(o => {
    o.addEventListener("click", numberSetup);
})

equals.addEventListener("click", equalsSign);
clearButton.addEventListener("click", clear);
plusOp.addEventListener("click", addNumber);
