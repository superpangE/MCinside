import { getContainer, getimgElment, getLabel, getSpan } from '../common.js';

const getHitContent = (Board) => {
  const HitContent = getSpan(null, 'hitgall_hitcontent');
  const ContentImg = getimgElment(Board.imgUrl, 'hit_gall_photo');
  const ContentTitle = getLabel('hitgall_title', Board.title);
  const contentAuthor = getLabel('hitgall_gallname', Board.gallName);
  HitContent.insertAdjacentElement('beforeend', ContentImg);
  HitContent.insertAdjacentElement('beforeend', ContentTitle);
  HitContent.insertAdjacentElement('beforeend', contentAuthor);
  return HitContent;
};

const HitGall = async (titleName) => {
  const Container = getContainer(null, 'hitgall_container');
  const TitleWrap = getContainer(null, 'hitgall_titlewrap');
  const ContentWrap = getContainer(null, 'hitgall_contentwrap');

  const HitLabel = getLabel('hitgall_title_label', titleName);
  TitleWrap.insertAdjacentElement('beforeend', HitLabel);

  const URL = 'http://localhost:3000/board';
  const response = await fetch(URL, {
    method: 'get',
  });
  const boardData = await response.json();

  for (let i = 0; i < 5; i++) {
    ContentWrap.insertAdjacentElement('beforeend', getHitContent(boardData.board[i]));
  }

  Container.insertAdjacentElement('beforeend', TitleWrap);
  Container.insertAdjacentElement('beforeend', ContentWrap);

  return Container;
};

export default HitGall;
