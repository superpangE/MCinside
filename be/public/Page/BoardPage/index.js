import BoardHead from '../../components/BoardHead/index.js';
import BoardContent from '../../components/BoardContent/index.js';
import { getContainer } from '../../components/common.js';

const BoardPage = async () => {
  const mainContainer = getContainer(null, 'main_container');
  mainContainer.insertAdjacentElement('beforeend', BoardHead());
  const Content = await BoardContent();
  mainContainer.insertAdjacentElement('beforeend', Content);

  return mainContainer;
};

export default BoardPage;
