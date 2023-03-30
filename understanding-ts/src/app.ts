let  userInput: unknown;
let userName: string;

userInput = 8;
userInput = 'John Wick';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(msg: string, code: number): never {
    throw {message: msg, errorCode: code};
    // while (true) {}
}

// generateError('An error ocurred', 500);

console.log(userInput);