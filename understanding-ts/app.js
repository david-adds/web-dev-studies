var userInput;
var userName;
userInput = 7;
userInput = 'John Wick';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(msg, code) {
    throw { message: msg, errorCode: code };
}
var result = generateError('An error ocurred', 500);
console.log(result);
