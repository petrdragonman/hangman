export const createEl = (elType, textVal, parent, id = "defaultId") => {
    const el = document.createElement(elType);
    el.id = id;
    const text = document.createTextNode(textVal);
    el.appendChild(text);
    parent.appendChild(el);
};

export const creatImgEl = (elType, src, parent, id = "imgId") => {
    const imgEl = document.createElement(elType);
    imgEl.src = src;
    imgEl.id = id;
    parent.appendChild(imgEl);
};

export const removeEl = (el, parent) => {
    if (el) {
        parent.removeChild(el);
    }
};