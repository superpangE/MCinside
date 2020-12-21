import { getContainer, getText } from '../common.js';

const ShowContent = async (id) => {
  const MainContainer = getContainer(null, 'show_container');

  const ContentHead = getContainer(null, 'content_head');
  const HeadTitle = getContainer(null, 'head_title');
  const HeadAuthor = getContainer(null, 'head_author');

  const ContentMain = getContainer(null, 'content_main');
  const ContentTitle = getContainer(null, 'content_title');
  const ContentMiddle = getContainer(null, 'content_middle');

  const URL = 'http://localhost:3000/board';
  const response = await fetch(URL, {
    method: 'get',
  });

  const boardData = await response.json();
  const TitleLabel = getText(null, 'content_label', boardData.board[id].title);
  const TitleAuthor = getText(null, 'content_author', boardData.board[id].author);
  const BoardContent = getText(null, 'content_middle', boardData.board[id].content);
  ContentTitle.insertAdjacentElement('beforeend', TitleLabel);
  ContentTitle.insertAdjacentElement('beforeend', TitleAuthor);
  ContentMiddle.insertAdjacentElement('beforeend', BoardContent);

  ContentMain.insertAdjacentElement('beforeend', ContentTitle);
  ContentMain.insertAdjacentElement('beforeend', ContentMiddle);
  ContentHead.insertAdjacentElement('beforeend', HeadTitle);
  ContentHead.insertAdjacentElement('beforeend', HeadAuthor);
  MainContainer.insertAdjacentElement('beforeend', ContentHead);
  MainContainer.insertAdjacentElement('beforeend', ContentMain);
  return MainContainer;
};
export default ShowContent;
