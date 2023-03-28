function combine(
    input1: number | string, 
    input2: number | string, 
    resultConversion: 'as-number' | 'as-text'
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; // the '+' sign right before the variable is the short way to convert it into a number.
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
//     if (resultConversion === 'as-number') {
//         return +result; // the '+' sign right before the variable is the short way to convert it into a number.
//     } else {
//         return result.toString();
//     }
};

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '57', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Joh', 'nathan', 'as-text');
console.log(combinedNames);