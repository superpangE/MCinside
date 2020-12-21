const getContainer = (id, className, imgEle = undefined) => {
  const container = document.createElement('div');
  if (className != null) container.className = className;
  else container.id = id;
  if (imgEle !== undefined) {
    container.insertAdjacentElement('afterbegin', imgEle);
  }
  return container;
};

const getText = (id, className, text) => {
  const container = document.createElement('div');
  if (className != null) container.className = className;
  else container.id = id;
  container.textContent = text;
  return container;
};

const getSpan = (id, className, text = undefined, imgEle = undefined) => {
  const spanbox = document.createElement('span');
  spanbox.textContent = text;
  if (className !== null) spanbox.className = className;
  else spanbox.id = id;
  if (imgEle !== undefined) {
    spanbox.insertAdjacentElement('afterbegin', imgEle);
  }
  return spanbox;
};

const getimgElment = (url, classname) => {
  const imgEle = document.createElement('img');
  imgEle.src = url;
  imgEle.className = classname;
  return imgEle;
};

const getInputElement = (id, placeholder) => {
  const inputEle = document.createElement('input');
  inputEle.id = id;
  inputEle.placeholder = placeholder;
  return inputEle;
};

const getButton = (id, textContent) => {
  const button = document.createElement('button');
  button.id = id;
  button.textContent = textContent;
  return button;
};

const getLabel = (className, text) => {
  const Label = document.createElement('label');
  Label.className = className;
  Label.textContent = text;
  return Label;
};

const getLink = (className, href, text) => {
  const link = document.createElement('a');
  link.className = className;
  link.href = href;
  link.text = text;
  return link;
};

export {
  getContainer,
  getimgElment,
  getInputElement,
  getButton,
  getLabel,
  getLink,
  getSpan,
  getText,
};
