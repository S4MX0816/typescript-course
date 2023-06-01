function combine(input1, input2, resultType) {
    var res;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number") {
        res = +input1 + +input2;
    }
    else {
        res = input1.toString() + input2.toString();
    }
    // if (resultType === "as-number") {
    //   return +res;
    // } else {
    //   return res.toString();
    // }
    return res;
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
var combinedNames = combine("Sam", "Nfs", "as-text");
console.log(combinedNames);
