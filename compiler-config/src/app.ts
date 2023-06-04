const button = document.querySelector("button");

function clickHandler(message: string) {
  console.log("clicked! " + message);
}

// A comment
if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome"));
}
