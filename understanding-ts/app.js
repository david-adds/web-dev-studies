function add(n1, n2, showResult, msg) {
    if (showResult) {
        console.log("".concat(msg, " ").concat(n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var message = 'Result is: ';
add(number1, number2, printResult, message);
