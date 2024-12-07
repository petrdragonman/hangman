  export const converToDashes = (word) => {
    return word.split("").map((el) => {
        el = "_";
        //console.log(el);
        return el;
      }).join(" ");
  };
  