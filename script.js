const keyLayout = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const keyboard = document.getElementById("keyboard");

keyLayout.forEach((key) => {
  console.log(key);
  const keyElement = document.createElement("button");
  keyElement.textContent = key.toUpperCase();
  //if (key.valueOf !== "") {
  keyElement.classList.add("key");
  keyElement.addEventListener("click", () => {
    console.log(keyElement);
    // Handle key press
  });
  //}
  // keyElement.classList.add("game__body__control__keyboard__keys");
  // keyElement.addEventListener("cklick", () => {
  //     console.log(keyElement);
  //   // Handle key press
  // });
  // keyElement.addEventListener("mouseup", () => {
  //   // Handle key release
  // });
  keyboard.appendChild(keyElement);
});
