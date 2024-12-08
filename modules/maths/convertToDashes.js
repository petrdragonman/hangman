  export const converToDashes = (word) => {
    return word.split("").map((el) => {
        el = "_";
        return el;
      }).join(" ");
  };
  