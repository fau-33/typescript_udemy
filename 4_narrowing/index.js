"use strict";
// 1 - Type guard
function sum(a, b) {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) ||
        isNaN(numB) ||
        (typeof a === "string" && isNaN(parseFloat(a))) ||
        (typeof b === "string" && isNaN(parseFloat(b)))) {
        return null;
    }
    const result = numA + numB;
    return typeof a === "string" || typeof b === "string"
        ? result.toString()
        : result;
}
console.log(sum(1, 2));
console.log(sum("1", 2));
console.log(sum("1", "2"));
console.log(sum("a", "2"));
