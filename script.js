import { createEl, creatImgEl, removeEl } from "./modules/dom/dom.js";
import { getRandomWord } from "./modules/maths/getRandomWord.js";
import { converToDashes } from "./modules/maths/convertToDashes.js";
import { updateStringWithGuessedLetter } from "./modules/maths/updateStringWithGuessedLetter.js.js";
import { getIndices } from "./modules/maths/getIndices.js";
//import { drawKeyboard } from "./modules/dom/keyboard.js";


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
let dashedWord = "Guess _ word";
let counter = 0;
let lives = 10;

//while (counter < 10) {
  //drawKeyboard();
  const drawMyKeyboard = () => {
    alphabet.forEach((key) => {
      const keyElement = document.createElement("button");
      keyElement.textContent = key.toUpperCase();
      keyElement.classList.add("key");
      keyElement.disabled = true;
      keyElement.addEventListener("click", () => {
        // disable the keys
        // get the letter
        letter = keyElement.textContent;
        // get indices for the guessed letter
        const indices = getIndices(word, letter);
        if (indices.length === 0) {
          // start the counter;
          counter++;
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
          // update dashes
          dashedWord = updateStringWithGuessedLetter(dashedWord, letter, indices);
        }
  
        if (!dashedWord.includes("_")) {
          alert("CONGRATULATION, You have guessed the correct word!");
          btnQuit.disabled = true;
          btnPlay.disabled = false;
          btnPlay.innerText = "play Again";
          //const btnEl = document.getElementById("play");
          //btnEl.innerText = "Play Again";
        }
  
        if (counter >= 10) {
          alert("SORRY, You Lost!");
          btnPlay.innerText = "Play Again";
          btnPlay.disabled = false;
          btnQuit.disabled = true;
        }
        // disable the buttun after the user clicks it
        keyElement.disabled = true;
  
        removeEl(
          document.getElementById("guess-string"),
          document.getElementById("guess")
        );
        createEl(
          "p",
          dashedWord,
          document.getElementById("guess"),
          "guess-string"
        );
      });
  
      keyboard.appendChild(keyElement);
    });
  };

  drawMyKeyboard();


  const disableKeys = (isDisabled) => {
    const keyEl = document.getElementsByClassName("key");
    for (let i = 0; i < keyEl.length; i++) {
      keyEl[i].disabled = isDisabled;
    }
    const quitEl = document.querySelector("#quit");
    quitEl.disabled = isDisabled;
  };

  
  const resetGame = () => {
    removeEl(
      document.getElementById("imgId"),
      document.getElementById("drawing")
    );
    removeEl(
      document.getElementById("livesId"),
      document.getElementById("drawing")
    );
    const defaultWord = document.getElementById("guess-string");
    defaultWord.innerText = "GUESS _ WORD";
    counter = 0;
    lives = 10;
  };

  const quitGame = () => {
    resetGame();
    disableKeys(true);
    // remove drawing
    removeEl(
      document.getElementById("imgId"),
      document.getElementById("drawing")
    );
    // remove lives text
    removeEl(
      document.getElementById("livesId"),
      document.getElementById("drawing")
    );
    // play button
    btnPlay.innerText = "Play";
    btnPlay.disabled = false;
    dashedWord = "Guess _ word";

  }
  
  const btnPlay = document.querySelector("#play");
  btnPlay.addEventListener("click", () => {
    // set all key to be enabled
    resetGame();
    disableKeys(false);
    btnPlay.innerText = "Play";
    // disable the button when clicked by user
    //drawMyKeyboard();
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
    // create element with hidden word
    createEl(
      "p", 
      dashedWord,
      document.getElementById("guess"),
      "guess-string",
    );
  
  });

  ////////////////////////////////
  const btnQuit = document.querySelector("#quit");
  btnQuit.disabled = true;
  btnQuit.addEventListener("click", () => {
    counter = 11;
    quitGame();
    alert("THANK YOU FOR PLAYING");
  });
//}

