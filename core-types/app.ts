let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Sam";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, errorCode: number): never {
  throw { message, errorCode };
  // while (true) {}
}

const res = generateError("An error occurred!", 500);
console.log(res);
