import { Header, MenuBar, BoardHead, ShowContent, GoodButton } from '../../components/index.js';
import { getContainer } from '../../components/common.js';

const ShowPage = async (id) => {
  const MainContainer = getContainer(null, 'main_container');

  MainContainer.insertAdjacentElement('beforeend', Header());
  MainContainer.insertAdjacentElement('beforeend', MenuBar());
  const ViewWrap = getContainer(null, 'pageview_wrap');

  ViewWrap.insertAdjacentElement('beforeend', BoardHead(true));
  ViewWrap.insertAdjacentElement('beforeend', await ShowContent(id));
  ViewWrap.insertAdjacentElement('beforeend', GoodButton(id));
  MainContainer.insertAdjacentElement('beforeend', ViewWrap);
  return MainContainer;
};
export default ShowPage;
