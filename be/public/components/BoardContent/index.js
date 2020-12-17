import { getButton, getContainer, getSpan } from '../common.js';
// id : 기본키
// author : 글쓴이
// title : 제목
// content : 내용
// goodNum: 추천 갯수
// imgUrl: 이미지 url
// gallName: 갤러리 이름
// clicked : 조회수
// createAt :

const getWritten = (board) => {
  const WrittenContainer = getContainer(null, 'written_container');
  const WrittenNum = getSpan(null, 'board_num', board.id);
  const WrittenNTitle = getSpan(null, 'written_title', board.title);
  const WrittenAuthor = getSpan(null, 'board_author', board.author);
  const WrittenDate = getSpan(null, 'board_date', board.createAt);
  const WrittenClicked = getSpan(null, 'board_clicked', board.clicked);
  const WrittenRecommand = getSpan(null, 'board_reccomand', board.goodNum);

  WrittenContainer.insertAdjacentElement('beforeend', WrittenNum);
  WrittenContainer.insertAdjacentElement('beforeend', WrittenNTitle);
  WrittenContainer.insertAdjacentElement('beforeend', WrittenAuthor);
  WrittenContainer.insertAdjacentElement('beforeend', WrittenDate);
  WrittenContainer.insertAdjacentElement('beforeend', WrittenClicked);
  WrittenContainer.insertAdjacentElement('beforeend', WrittenRecommand);

  return WrittenContainer;
};

const BoardContent = async () => {
  const BoardContainer = getContainer(null, 'board_container');

  const HeaderWrap = getContainer(null, 'header_wrap');

  const BoardNum = getSpan(null, 'board_num', '번호');
  const BoardTitle = getSpan(null, 'board_title', '제목');
  const BoardAuthor = getSpan(null, 'board_author', '글쓴이');
  const BoardDate = getSpan(null, 'board_date', '작성일');
  const BoardClicked = getSpan(null, 'board_clicked', '조회');
  const BoardRecommand = getSpan(null, 'board_reccomand', '추천');

  HeaderWrap.insertAdjacentElement('beforeend', BoardNum);
  HeaderWrap.insertAdjacentElement('beforeend', BoardTitle);
  HeaderWrap.insertAdjacentElement('beforeend', BoardAuthor);
  HeaderWrap.insertAdjacentElement('beforeend', BoardDate);
  HeaderWrap.insertAdjacentElement('beforeend', BoardClicked);
  HeaderWrap.insertAdjacentElement('beforeend', BoardRecommand);

  const MainWrap = getContainer(null, 'main_wrap');

  const URL = 'http://localhost:3000/board';
  const response = await fetch(URL, {
    method: 'get',
  });
  const boardData = await response.json();

  boardData.board.forEach((board) => {
    const Written = getWritten(board);
    MainWrap.insertAdjacentElement('beforeend', Written);
  });

  const FooterWrap = getContainer(null, 'footer_wrap');
  const WriteButton = getButton('write_btn', '글쓰기');
  FooterWrap.insertAdjacentElement('beforeend', WriteButton);

  BoardContainer.insertAdjacentElement('beforeend', HeaderWrap);
  BoardContainer.insertAdjacentElement('beforeend', MainWrap);
  BoardContainer.insertAdjacentElement('beforeend', FooterWrap);

  return BoardContainer;
};

export default BoardContent;
