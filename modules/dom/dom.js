export const createEl = (elType, textVal, parent, id = "defaultId") => {
    const el = document.createElement(elType);
    el.id = id;
    const text = document.createTextNode(textVal);
    el.appendChild(text);
    parent.appendChild(el);
};

export const removeEl = (el, parent) => {
    if (el) {
        parent.removeChild(el);
    }
};