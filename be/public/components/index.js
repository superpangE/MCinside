import LoginForm from "./LoginForm/index.js";
// 문자열 html -> 엘리먼트

const Root = () => {
  const root = document.querySelector("#root"); // html
  root.insertAdjacentElement("beforeend", LoginForm());
};

Root();
