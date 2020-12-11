import { getContainer, getLabel } from '../common';

const MenuBar = () => {
  const MenuWrap = getContainer('BigMenu', null);
  const LabelWrap = getContainer('menuLabel', null);
  const CntWrap = getContainer('CntWrap', null);

  const labels = [];
  labels.push(getLabel('labels', 'm.갤러리'));
  labels.push(getLabel('labels', '갤러리'));
  labels.push(getLabel('labels', '갤로그'));
  labels.push(getLabel('labels', '뉴스'));
  labels.push(getLabel('labels', '이벤트'));
  labels.push(getLabel('labels', '게임'));

  for (let i = 0; i < labels.length; i++) {
    LabelWrap.insertAdjacentElement('beforeend', labels[i]);
  }

  const Cnt = getLabel('Cnt', '실시간 이만큼 게시글 등록');

  CntWrap.insertAdjacentElement('beforeend', Cnt);

  MenuWrap.insertAdjacentElement('beforeend', LabelWrap);
  MenuWrap.insertAdjacentElement('beforeend', CntWrap);
  return MenuWrap;
};

export default MenuBar;
