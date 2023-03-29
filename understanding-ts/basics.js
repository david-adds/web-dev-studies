"use strict";
/*============= Using Types =========== */
function add(n1, n2, showResult, msg) {
    if (showResult) {
        console.log(`${msg} ${n1 + n2}`);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const message = 'Result is: ';
add(number1, number2, printResult, message);
