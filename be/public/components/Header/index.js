import BoardPage from '../../Page/BoardPage/index.js';
import MainPage from '../../Page/MainPage/index.js';
import { getContainer, getimgElment, getInputElement, getButton, getLabel } from '../common.js';

const Header = () => {
  const onClick = async () => {
    const root = document.querySelector('#root');
    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    const Board = await BoardPage();
    root.insertAdjacentElement('beforeend', Board);
  };
  const goFirst = async () => {
    window.location.href = '/';
  };
  const HeaderContainer = getContainer(null, 'header_container');
  const logoImg = getimgElment('https://nstatic.dcinside.com/dc/logo_day/dc_logo_201207.gif');
  const Logo = getContainer(null, 'logo', logoImg);
  const SearchBox = getContainer(null, 'search_box');
  const Labelwrap = getContainer(null, 'label_wrap');
  const Inputwrap = getContainer(null, 'input_wrap');
  const HeaderInput = getInputElement('header_input', '갤러리 & 통합검색');
  const SearchButton = getButton('search_button', '검색');
  SearchButton.addEventListener('click', onClick);
  Logo.addEventListener('click', goFirst);

  const IssueLabel = [];
  IssueLabel.push(getLabel('label_title', '오늘의 이슈'));
  IssueLabel.push(getLabel('header_label', '레이디스 코드'));
  IssueLabel.push(getLabel('header_label', '아시아나 항공'));
  IssueLabel.push(getLabel('header_label', '충주시 유튜브'));

  for (let i = 0; i < 4; i++) {
    Labelwrap.insertAdjacentElement('beforeend', IssueLabel[i]);
  }

  Inputwrap.insertAdjacentElement('beforeend', HeaderInput);
  Inputwrap.insertAdjacentElement('beforeend', SearchButton);
  SearchBox.insertAdjacentElement('beforeend', Labelwrap);
  SearchBox.insertAdjacentElement('beforeend', Inputwrap);
  HeaderContainer.insertAdjacentElement('beforeend', Logo);
  HeaderContainer.insertAdjacentElement('beforeend', SearchBox);
  return HeaderContainer;
};

export default Header;
