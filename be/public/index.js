import { MainPage, BoardPage, ShowPage } from './Page/index.js';

// 문자열 html -> 엘리먼트
const Root = async () => {
  const root = document.querySelector('#root'); // html
  const Main = await MainPage();
  root.insertAdjacentElement('beforeend', Main);
};

Root();
