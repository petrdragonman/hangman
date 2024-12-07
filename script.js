import { createEl, removeEl } from "./modules/dom/dom.js";
import { getRandomWord } from "./modules/maths/getRandomWord.js";
import { converToDashes } from "./modules/maths/convertToDashes.js";


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

alphabet.forEach((key) => {
  const keyElement = document.createElement("button");
  keyElement.textContent = key.toUpperCase();
  keyElement.classList.add("key");
  keyElement.addEventListener("click", () => {
    
    // get the letter
    letter = keyElement.textContent;
    // compare it with the word - find the index or indexes
    //if (word) {
      console.log(word);
      //console.log(letter);
      const result = word.toUpperCase().split("").indexOf(letter);
      console.log(result);
    //}
    // if corect update the displayed dashes
    // if incorect - draw hangman
    // in both cases disable the letter on keyboard
    if (result === -1) {
      console.log("Draw hangman part");
      // disable this letter
    } else {
      console.log("update dash word");
      // update dashes
      //const updated = dashedWord.split(" ")[result] = letter;
      //console.log(updated);
      console.log(dashedWord);
      console.log(dashedWord.split(" "));
      dashedWord = dashedWord.split(" ").map((el, index) => {
        if (index === result) {
          return el = letter;
        }
        // } else {
        //   el = "_";
        // }
        console.log(el);
        return el;
      }).join(" ");

      // dashedWord.split(" ").map((el, index) => {
      //   console.log(el);
      //   if(index === result) {
      //     return el = letter;
      //   }
      //   return el;
      // }).join("_");
    }

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