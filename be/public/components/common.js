const getContainer = (id, className, type, imgEle = undefined) => {
    const container = document.createElement("div");
    if (type == "className") container.className = className;
    else container.id = id;
    if (imgEle != undefined) {
      container.insertAdjacentElement("afterbegin", imgEle);
    }
    return container;
};

const getimgElment = (url) => {
  const imgEle = document.createElement("img");
  imgEle.src = url;
  return imgEle;
};

const getInputElement = (id, placeholder) => {
  const inputEle = document.createElement("input");
  inputEle.id = id;
  inputEle.placeholder = placeholder;
  return inputEle;
};

const getButton = (id, textContent) => {
  const button = document.createElement("button");
  button.id = id;
  button.textContent = textContent;
  return button;
};

const getLabel = (className, text) => {
  const Label = document.createElement("label");
  Label.className = className;
  Label.textContent = text;
  return Label;
};

const getLink = (className, href, text) => {
    const link = document.createElement("a");
    link.class = className;
    link.href = href;
    link.text = text;
    return link;
};

export { getContainer, getimgElment, getInputElement, getButton, getLabel, getLink};