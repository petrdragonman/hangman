export const updateStringWithGuessedLetter = (word, letter, indexes) => {
    // convert string to an array
    const convertedToArray = word.split(" ");
    // replace dash with a guessed letter at index
    const updated = convertedToArray.map((el, index) => {
        indexes.filter((i) => {
            if (index === i) {
                return el = letter;
            }
        });
        return el;
    });
    // convert array to string with spaces
    const joined = updated.join(" ");
    return joined;
  };