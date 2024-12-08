import { createEl, creatImgEl, removeEl } from "./modules/dom/dom.js";
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
let lives = 10;

//while (counter < 10) {
  alphabet.forEach((key) => {
    const keyElement = document.createElement("button");
    keyElement.textContent = key.toUpperCase();
    keyElement.classList.add("key");
    keyElement.addEventListener("click", () => {
      // get the letter
      letter = keyElement.textContent;
      console.log(letter);
      console.log(word);
      // get indices for the guessed letter
      const indices = getIndices(word, letter);
      if (indices.length === 0) {
        // start the counter;
        counter++;
        console.log("Draw hangman part- counter: " + counter);
        // one less live
        lives--;
        // to update live first remove old value and create new one
        removeEl(
          document.getElementById("livesId"),
          document.getElementById("drawing")
        );
        createEl(
          "p",
          `You have: ${lives} lives left.`,
          document.getElementById("drawing"),
          "livesId"
        );
        // remove original img first
        removeEl(
          document.getElementById("imgId"),
          document.getElementById("drawing")
        );
        // create image
        creatImgEl(
          "img",
          `./assets/img/h-${counter}.jpg`,
          document.getElementById("drawing")
        );
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
//}

