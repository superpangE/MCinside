import MainPage from './Page/index.js';
import BoardPage from './Page/boardpage.js';
// 문자열 html -> 엘리먼트

const Root = async () => {
  const root = document.querySelector('#root'); // html
  const Main = await MainPage();
  root.insertAdjacentElement('beforeend', Main);
};

const Root2 = () => {
  const root = document.querySelector('#root');
  const Board = BoardPage();
  root.insertAdjacentElement('beforeend', Board);
};

Root2();
