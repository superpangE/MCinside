import { MainPage, BoardPage } from './Page/index.js';

// 문자열 html -> 엘리먼트
const Root = async () => {
  const root = document.querySelector('#root'); // html
  const Main = await MainPage();
  root.insertAdjacentElement('beforeend', Main);
};

const Root2 = async () => {
  const root = document.querySelector('#root');
  const Board = await BoardPage();
  root.insertAdjacentElement('beforeend', Board);
};

Root();
