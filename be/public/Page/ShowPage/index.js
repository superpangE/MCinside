import { Header, MenuBar, BoardHead, ShowContent, GoodButton } from '../../components/index.js';
import { getContainer } from '../../components/common.js';

const ShowPage = async () => {
  const MainContainer = getContainer(null, 'main_container');

  MainContainer.insertAdjacentElement('beforeend', Header());
  MainContainer.insertAdjacentElement('beforeend', MenuBar());
  const ViewWrap = getContainer(null, 'pageview_wrap');

  ViewWrap.insertAdjacentElement('beforeend', BoardHead());
  ViewWrap.insertAdjacentElement('beforeend', await ShowContent());
  ViewWrap.insertAdjacentElement('beforeend', GoodButton());
  MainContainer.insertAdjacentElement('beforeend', ViewWrap);
  return MainContainer;
};
export default ShowPage;
