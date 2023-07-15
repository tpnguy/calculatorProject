let answer = 0;
let clearButton = document.querySelector(".outputBottom");
clearButton.addEventListener("click", clear());
function clear(){
    console.log("fired");
    answer = 0;
    document.querySelector('.outputBottom').textContent = answer;
}
