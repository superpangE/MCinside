import LoginForm from "./LoginForm/index.js";
import Header from "./Header/index.js";
import MenuBar from "./MenuBar/index.js";
import BookGall from "./BookGall/index.js";
import HitGall from "./HitGall/index.js";
// 문자열 html -> 엘리먼트

const Root = async () => {
  const root = document.querySelector("#root"); // html
  
  root.insertAdjacentElement("beforeend", await HitGall());
  // root.insertAdjacentElement("beforeend", BookGall());
  // root.insertAdjacentElement("beforeend", MenuBar());
  // root.insertAdjacentElement("beforeend", Header());
  // root.insertAdjacentElement("beforeend", LoginForm());
};

Root();
