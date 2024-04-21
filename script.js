//Varible initilization
let num1 = 0;
let num2 = 0;
let operator = ``;
let result = ``;
let hasRun = false;
const operators = [`÷`,`x`,`-`,`+`]
let input = ``;
let manyDecimal = false;

//Functions
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
    if (b === 0) {
        return `no`;
    } 
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
    operator = ``;
    input = ``
    display.textContent = ``
}

function hasDecimal(string){
    let count = (string.match(/\./g) || []).length;
    return count !== 0;
}

//DOM Manipulation Setup and Listeners
const operatorButtons = document.querySelector(`.operators`);
const numButtons = document.querySelector(`.numbers`);
const equal = document.querySelector(`#equal`);
const clearDisplay = document.querySelector(`#clear`);
const display = document.querySelector(`.displayBox`);
const negative = document.querySelector(`#negative`)

display.textContent = ``;



numButtons.addEventListener(`click`, (e)=> {
    if (e.target.tagName === `BUTTON` && ![`negative`].includes(e.target.id)){
        if (hasRun === true){
            hasRun = false;
            clear()
            input = input + e.target.textContent;
            manyDecimal = hasDecimal(input);
            display.textContent = input;
            return input;
        } else if (e.target.textContent === '.' && manyDecimal === true) {
            return
        } else {
        console.log(e.target.textContent);
        input = input + e.target.textContent;
        manyDecimal = hasDecimal(input);
        display.textContent = input;
        return input;
        } 
    }
        
    }
)



operatorButtons.addEventListener(`click`, (e)=> {
    if (e.target.tagName === `BUTTON` && ![`equal`, `clear`].includes(e.target.id)){
        if (input === '' && hasRun === false){
            return
        }else if (result != ``){
            operator = e.target.textContent;
            hasRun = false;
            return operator;

            } else if (operators.includes(operator)){
                tempNum = parseFloat(input);
                num1 = operate(num1, tempNum, operator);
                display.textContent = num1
                input = ``;
                operator = e.target.textContent;
                return num1; 
            }
            
            num1 = parseFloat(input);
            console.log(num1);
            operator = e.target.textContent;
            input = ``;
            return [num1, operator];
            
            }
    }
)

equal.addEventListener(`click`, (e) =>{
    if (operator === ''){
        return
    }
    num2 = parseFloat(input);
    console.log(num2);
    result = operate(num1, num2, operator);
    if (result === `no`) {
        display.textContent = `NO.`;
        result = ``;
        input = ``;
        hasRun = true;
    } else {
        result = Math.round((result + Number.EPSILON) * 100) / 100
        display.textContent = result;
        num1 = result;
        input = ``;
        hasRun = true;
    }
})


clearDisplay.addEventListener(`click`, (e) =>{
    clear();
})

negative.addEventListener(`click`, (e)=> {
    let neg = `-`;
    if(input.includes(neg)){
        input = input.substring(1);
        display.textContent = ``;
        display.textContent = input;
    } else {
    input = `-${input}`;
    display.textContent = input;
    }
})