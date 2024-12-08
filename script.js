import { createEl, removeEl } from "./modules/dom/dom.js";
import { getRandomWord } from "./modules/maths/getRandomWord.js";
import { converToDashes } from "./modules/maths/convertToDashes.js";
import { updateStringWithGuessedLetter } from "./modules/maths/updateStringWithGuessedLetter.js.js";
import { getIndices } from "./modules/maths/getIndices.js";


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
let word = "";
let dashedWord = "";
let counter = 0;

alphabet.forEach((key) => {
  const keyElement = document.createElement("button");
  keyElement.textContent = key.toUpperCase();
  keyElement.classList.add("key");
  keyElement.addEventListener("click", () => {
    // start the counter;
    counter++;
    // get the letter
    letter = keyElement.textContent;
    console.log(letter);
    console.log(word);
    // get indices for the guessed letter
    const indices = getIndices(word, letter);
    if (indices.length === 0) {
      console.log("Draw hangman part");
      // disable this letter
    } else {
      console.log("update dash word");
      // update dashes
      dashedWord = updateStringWithGuessedLetter(dashedWord, letter, indices);
    }

    if (!dashedWord.includes("_")) {
      alert("CONGRATULATION, You have guessed the correct word!");
      btnPlay.disabled = false;
    }

    if(counter >= 10) {
      alert("SORRY, You Lost!");
      btnPlay.disabled = false;
    }
    // disable the buttun after the user clicks it
    keyElement.disabled = true;

    removeEl(
      document.getElementById("guess-string"),
      document.getElementById("guess"),
    );
    createEl(
      "p", 
      dashedWord, 
      document.getElementById("guess"),
      "guess-string",
    );
  });

  keyboard.appendChild(keyElement);
});

const btnPlay = document.querySelector("#play");
btnPlay.addEventListener("click", () => {
  // disable the button when clicked by user
  btnPlay.disabled = true;

  // if there is a word displayed - remove it
  removeEl(
    document.getElementById("guess-string"),
    document.getElementById("guess"),
  );

  // random word
  word = getRandomWord();
  // convert to dashes
  dashedWord = converToDashes(word);
  console.log(word);
  console.log(dashedWord);
  // create element with hidden word
  createEl(
    "p", 
    dashedWord,
    document.getElementById("guess"),
    "guess-string",
  );

});

const btnQuit = document.querySelector("#quit");
btnQuit.addEventListener("click", () => {
  //console.log("button quit was clicked!");
  counter = 11;
  alert("THANK YOU FOR PLAYING");
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