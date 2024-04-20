let num1 = 0;
let num2 = 0;
let operator = 0;

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
        case `plus`:
        return add(a, b);
        case `minus`:
        return subtract(a, b);
        case `times`:
        return multiply(a, b);
        case `divide`:
        return divide(a, b);
    }
}

console.log(operate(10, 5, ));



//Listeners

const numButtons = document.querySelector(`.numbers`);
const row = document.querySelectorAll(`.row`)

numButtons.addEventListener(`click`, (e)=> {
    if (e.target.tagName === `BUTTON`){
        input = e.target.textContent;
        console.log(input);
    }

})