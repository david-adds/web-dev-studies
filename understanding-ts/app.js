"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combine = void 0;
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
exports.combine = combine;
;
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames = combine('Joh', 'nathan');
console.log(combinedNames);
