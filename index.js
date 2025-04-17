const display = document.getElementById("input");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "error";
    }
}

function naturalLog() {
    display.value = Math.log(display.value);
}

function logarithm() {
    display.value = Math.log10(display.value);
}

function squareRoot() {
    display.value = Math.sqrt(display.value);
}

function power2() {
    display.value = display.value ** 2;
}

function factorial() {
    let res = 1;
    for(let i = 1; i <= display.value; i++) {
        res *= i;
    }
    display.value = res;
}