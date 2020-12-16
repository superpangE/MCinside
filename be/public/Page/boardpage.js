import BoardHead from '../components/BoardHead/index.js';
import { getContainer } from '../components/common.js';

const BoardPage = () => {
  const mainContainer = getContainer(null, 'main_container');

  mainContainer.insertAdjacentElement('beforeend', BoardHead());

  return mainContainer;
};

export default BoardPage;
