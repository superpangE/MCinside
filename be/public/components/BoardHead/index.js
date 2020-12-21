import { getLabel, getButton, getContainer } from '../common.js';

const BoardHead = (selected = false) => {
  const MainContainer = getContainer(null, 'header_main');
  const BtnWrap = getContainer(null, 'header_btnwrap');
  const TitleWrap = getContainer(null, 'header_titlewrap');
  const SetupWrap = getContainer(null, 'header_settingwrap');
  const MainTitle = getLabel('header_title', '리그 오브 레전드 갤러리');
  const SimilGal = getLabel('header_setup', '연관 갤러리');
  const GalCopy = getLabel('header_setup', '갤주소 복사');
  const GalBan = getLabel('header_setup', '차단설정');
  const GalUse = getLabel('header_setup', '갤러리 이용안내');
  const AllBoard = getButton('all_board', '전체글');
  const GoodBoard = getButton('good_board', '개념글');
  const NoticeBoard = getButton('notice_board', '공지');

  BtnWrap.insertAdjacentElement('beforeend', AllBoard);
  BtnWrap.insertAdjacentElement('beforeend', GoodBoard);
  BtnWrap.insertAdjacentElement('beforeend', NoticeBoard);

  SetupWrap.insertAdjacentElement('beforeend', SimilGal);
  SetupWrap.insertAdjacentElement('beforeend', GalCopy);
  SetupWrap.insertAdjacentElement('beforeend', GalBan);
  SetupWrap.insertAdjacentElement('beforeend', GalUse);

  TitleWrap.insertAdjacentElement('beforeend', MainTitle);
  TitleWrap.insertAdjacentElement('beforeend', SetupWrap);

  MainContainer.insertAdjacentElement('beforeend', TitleWrap);
  if (!selected) MainContainer.insertAdjacentElement('beforeend', BtnWrap);

  return MainContainer;
};
export default BoardHead;
