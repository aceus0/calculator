let num1 = 0;
let num2 = 0;
let operator = ``;
let result = ``;
let hasRun = false;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case `+`:
        return add(a, b);
        case `-`:
        return subtract(a, b);
        case `x`:
        return multiply(a, b);
        case `÷`:
        return divide(a, b);
    }
}

function clear(){
    num1 = 0
    num2 = 0
    result = 0
    input = ``
    display.textContent = ``
}



//Listeners
const operatorButtons = document.querySelector(`.operators`);
const numButtons = document.querySelector(`.numbers`);
const equal = document.querySelector(`#equal`);
const clearDisplay = document.querySelector(`#clear`);
const display = document.querySelector(`.displayBox`)
let input = ``;
display.textContent = ``;

numButtons.addEventListener(`click`, (e)=> {
    if (e.target.tagName === `BUTTON`){
        if (hasRun === true){
            hasRun = false;
            clear()
            console.log(e.target.textContent);
            input = input + e.target.textContent;
            display.textContent = input;
            return input;
        } else {
        console.log(e.target.textContent);
        input = input + e.target.textContent;
        display.textContent = input;
        return input;
        } 
    }
        
    }
)

operatorButtons.addEventListener(`click`, (e)=> {
    if (e.target.tagName === `BUTTON` && ![`equal`, `clear`].includes(e.target.id)){
        if (result != ``){
        operator = e.target.textContent;
        hasRun = false;
        return operator;
        }
        display.textContent = ``;
        num1 = parseInt(input);
        console.log(num1);
        operator = e.target.textContent;
        input = ``;
        return [num1, operator];
        
        }
    }
)

equal.addEventListener(`click`, (e) =>{
    num2 = parseInt(input);
    console.log(num2);
    result = operate(num1, num2, operator);
    display.textContent = result;
    num1 = result;
    input = ``;
    hasRun = true;
})

clearDisplay.addEventListener(`click`, (e) =>{
    clear();
})