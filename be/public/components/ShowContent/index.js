import { getContainer, getLabel } from '../common.js';

const ShowContent = async () => {
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
  const TitleLabel = getLabel('content_label', boardData.board[0].title);
  const TitleAuthor = getLabel('content_author', boardData.board[0].author);
  const MiddleLabel = getLabel('content_middle', boardData.board[0].content);
  ContentTitle.insertAdjacentElement('beforeend', TitleLabel);
  ContentTitle.insertAdjacentElement('beforeend', TitleAuthor);
  ContentMiddle.insertAdjacentElement('beforeend', MiddleLabel);

  ContentMain.insertAdjacentElement('beforeend', ContentTitle);
  ContentMain.insertAdjacentElement('beforeend', ContentMiddle);
  ContentHead.insertAdjacentElement('beforeend', HeadTitle);
  ContentHead.insertAdjacentElement('beforeend', HeadAuthor);
  MainContainer.insertAdjacentElement('beforeend', ContentHead);
  MainContainer.insertAdjacentElement('beforeend', ContentMain);
  return MainContainer;
};
export default ShowContent;
