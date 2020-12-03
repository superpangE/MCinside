import LoginForm from "./LoginForm/index.js";

const Root = () => {
  const root = document.querySelector("#root");
  root.insertAdjacentHTML("afterbegin", LoginForm());
};

Root();
