function add(input1, input2) {
    var res;
    if (typeof input1 === "number" && typeof input2 === "number") {
        res = input1 + input2;
    }
    else {
        res = input1.toString() + input2.toString();
    }
    return res;
}
var combinedAges = add(30, 26);
console.log(combinedAges);
var combinedNames = add("Sam", "Nfs");
console.log(combinedNames);
