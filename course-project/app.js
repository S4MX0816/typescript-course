function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
console.log(printResult(add(5, 12)));
// let someValue: undefined
var combinedValues;
combinedValues = add;
// combinedValues = printResult;
// combinedValues = 5;
console.log(combinedValues(8, 8));
