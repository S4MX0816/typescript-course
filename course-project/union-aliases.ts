type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: ConversionDescriptor
) {
  let res;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    res = +input1 + +input2;
  } else {
    res = input1.toString() + input2.toString();
  }
  // if (resultType === "as-number") {
  //   return +res;
  // } else {
  //   return res.toString();
  // }
  return res;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Sam", "Nfs", "as-text");
console.log(combinedNames);
