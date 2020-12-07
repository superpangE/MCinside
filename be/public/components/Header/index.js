const getContaier = (id, className, type, imgEle = undefined) => {
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

const Header = () => {
  const Header = getContaier("", "header_container", "className");
  const logoImg = getimgElment(
    "https://nstatic.dcinside.com/dc/logo_day/dc_logo_201207.gif"
  );
  const Logo = getContaier("", "logo", "className", logoImg);
  const SearchBox = getContaier("", "search_box", "className");
  const Labelwrap = getContaier("", "label_wrap", "className");
  const Inputwrap = getContaier("", "input_wrap", "className");
  const HeaderInput = getInputElement("header_input", "갤러리 & 통합검색");
  const SearchButton = getButton("search_button", "검색");

  const IssueLabel = [];
  IssueLabel.push(getLabel("header_label", "오늘의 이슈"));
  IssueLabel.push(getLabel("header_label", "레이디스 코드"));
  IssueLabel.push(getLabel("header_label", "아시아나 항공"));
  IssueLabel.push(getLabel("header_label", "충주시 유튜브"));

  for (let i = 0; i < 4; i++) {
    Labelwrap.insertAdjacentElement("beforeend", IssueLabel[i]);
  }

  Inputwrap.insertAdjacentElement("beforeend", HeaderInput);
  Inputwrap.insertAdjacentElement("beforeend", SearchButton);
  SearchBox.insertAdjacentElement("beforeend", Labelwrap);
  SearchBox.insertAdjacentElement("beforeend", Inputwrap);
  Header.insertAdjacentElement("beforeend", Logo);
  Header.insertAdjacentElement("beforeend", SearchBox);
  return Header;
};

export default Header;
