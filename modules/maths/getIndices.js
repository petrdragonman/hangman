export const getIndices = (word, letter) => {
    const indices = word
        .toUpperCase()
        .split("")
        .reduce((acc, el, i) => acc.concat(el === letter ? i : []), []);
    return indices;
};