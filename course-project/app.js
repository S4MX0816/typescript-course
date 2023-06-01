var userInput;
var userName;
userInput = 5;
userInput = "Sam";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, errorCode) {
    throw { message: message, errorCode: errorCode };
}
var res = generateError("An error occurred!", 500);
console.log(res);
