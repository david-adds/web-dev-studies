"use strict";
let userInput;
let userName;
userInput = 8;
userInput = 'John Wick';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(msg, code) {
    throw { message: msg, errorCode: code };
    // while (true) {}
}
generateError('An error ocurred', 500);
