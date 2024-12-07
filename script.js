import { createEl, removeEl } from "./modules/dom/dom.js";

const alphabet = [
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
let letter = "";

alphabet.forEach((key) => {
  const keyElement = document.createElement("button");
  keyElement.textContent = key.toUpperCase();
  keyElement.classList.add("key");
  keyElement.addEventListener("click", () => {
    //console.dir(keyElement.textContent);
    letter = keyElement.textContent;
    removeEl(
      document.getElementById("guess-string"),
      document.getElementById("guess"),
    );
    createEl(
      "p", 
      letter, 
      document.getElementById("guess"),
      "guess-string",
    );
  });

  keyboard.appendChild(keyElement);
});

const btnPlay = document.querySelector("#play");
btnPlay.addEventListener("click", () => {
  //console.log("button play clicked!");
});

const btnQuit = document.querySelector("#quit");
btnQuit.addEventListener("click", () => {
  //console.log("button quit was clicked!");
});

// const createEl = () => {
//   // create element
//   const el = document.createElement("p");
//   // create a text node
//   const guessWord = document.createTextNode(letter);
//   //console.log(guessWord);
//   // the letter inside the p tag
//   el.appendChild(guessWord);
//   // add it to html
//   const parentEl = document.getElementById("guess");
//   //console.log(parentEl);
//   parentEl.appendChild(el);

// };

/*
const createElement = (elType, textVal, parent) => {
    // create a paragraph
    const el = document.createElement(elType);
    // create a text node from the input value
    const text = document.createTextNode(textVal);
    console.log(text);
    // put the text inside the p tags
    el.appendChild(text);
    el.classList.add("some-class");
    el.id = "someId";
    console.log(el);
    // I need to add it somewhere to my html
    parent.appendChild(el);
};
*/