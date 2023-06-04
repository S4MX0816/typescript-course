let appId = "abc";
const button = document.querySelector("button");

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
}

function clickHandler(
  message: string
  //  age: number
) {
  // let userName;
  console.log("clicked! " + message);
}

// A comment
if (button) {
  button.addEventListener(
    "click",
    clickHandler.bind(null, "You're welcome", 2)
  );
}
