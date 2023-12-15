document.addEventListener('DOMContentLoaded', function() {
    const numpad = document.querySelector('.numbers');
    const display = document.querySelector('.display');
    const operators = document.querySelector('.operators');

    let num1 = 'null';
    let num2 = 'null';
    let operation = 'null';

    //make all buttons work
    numpad.addEventListener('click', function(e) {
        if (e.target.classList.contains('number')) {
            if (display.textContent == '0' || display.textContent == '+' || display.textContent == '-' || display.textContent == '*' || display.textContent == '/' || display.textContent == '=') {
                display.textContent = '';
            }
            if(e.target.textContent == 'C') {
                clear();
                return;
            }
            display.textContent += e.target.textContent;
        }
    });

    operators.addEventListener('click', function(e) {
        if (e.target.classList.contains('operator')) {
            if(e.target.textContent == '=') {
                num2 = display.textContent;
                display.textContent = evaluate(num1, num2, operation);
                return;
            }
            operation = e.target.textContent;
            num1 = display.textContent;
            display.textContent = e.target.textContent;
        }
    });


    //functions for each operation
    function evaluate(a, b, operator){
        if (operator == '+') {
            return add(a, b);
        }
        if (operator == '-') {
            return subtract(a, b);
        }
        if (operator == '*') {
            return multiply(a, b);
        }
        if (operator == '/') {
            return divide(a, b);
        }
        if (operator == '%') {
            return modulo(a, b);
        }
    }
    function add(a, b) {
        return parseFloat(a) + parseFloat(b);
    }
    function subtract(a, b) {
        return parseFloat(a) - parseFloat(b);
    }
    function multiply(a, b) {
        return parseFloat(a) * parseFloat(b);
    }
    function divide(a, b) {
        return parseFloat(a) / parseFloat(b);
    }
    function modulo(a, b) {
        return parseFloat(a) % parseFloat(b);
    }
    function clear() {
        num1 = null;
        num2 = null;
        operation = null;
        display.textContent = '0';
    }
    //function to clear display
});