import { getContainer, getLabel, getSpan, getLink } from '../common';

const getRankContent = (rank, name) => {
  const Content = getLink('bookgall_link', '/', '');
  const Rank = getSpan(null, 'bookgall_rank', rank);
  const Name = getSpan(null, 'bookgall_name', name);
  Content.insertAdjacentElement('beforeend', Rank);
  Content.insertAdjacentElement('beforeend', Name);
  return Content;
};

const BookGall = () => {
  const Container = getContainer(null, 'bookgall_container');
  const TitleWrap = getContainer(null, 'bookgall_titlewrap');
  const ContentWrap = getContainer(null, 'bookgall_contentwrap');

  const TitleLeft = getSpan(null, 'title_left');
  const TitleLabel = getLabel('bookgall_title_label', '실북갤');
  TitleLeft.insertAdjacentElement('beforeend', TitleLabel);

  const TitleRight = getSpan(null, 'title_right');
  const GalleryLink = getLink('bookgall_content', '/', '갤러리');
  const MgalleryLink = getLink('bookgall_content', '/', '|  마이너 갤러리');
  TitleRight.insertAdjacentElement('beforeend', GalleryLink);
  TitleRight.insertAdjacentElement('beforeend', MgalleryLink);

  TitleWrap.insertAdjacentElement('beforeend', TitleLeft);
  TitleWrap.insertAdjacentElement('beforeend', TitleRight);

  const bookRank = [];
  bookRank.push(getRankContent('1', '스트리머'));
  bookRank.push(getRankContent('2', '국내야구'));
  bookRank.push(getRankContent('3', '만화'));
  bookRank.push(getRankContent('4', '인터넷방송'));
  bookRank.push(getRankContent('5', '기타프로그램'));
  bookRank.push(getRankContent('6', '토토'));
  bookRank.push(getRankContent('7', '여자연예인'));
  bookRank.push(getRankContent('8', '수능'));
  bookRank.push(getRankContent('9', '리그오브레전드'));
  bookRank.push(getRankContent('10', '아이돌마스터'));

  for (let i = 0; i < bookRank.length; i++) {
    ContentWrap.insertAdjacentElement('beforeend', bookRank[i]);
  }

  Container.insertAdjacentElement('beforeend', TitleWrap);
  Container.insertAdjacentElement('beforeend', ContentWrap);

  return Container;
};

export default BookGall;
