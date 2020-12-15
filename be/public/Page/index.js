import { BookGall, Header, HitGall, LoginForm, MenuBar } from '../components/index.js';
import { getContainer } from '../components/common.js';

const MainPage = async () => {
  const MainContainer = getContainer(null, 'mainpage_container');
  const SubContainer = getContainer(null, 'subpage_container');
  const LeftContainer = getContainer(null, 'left_container');
  const RightContainer = getContainer(null, 'right_container');

  MainContainer.insertAdjacentElement('beforeend', Header());
  MainContainer.insertAdjacentElement('beforeend', MenuBar());

  LeftContainer.insertAdjacentElement('beforeend', await HitGall('Hit 갤러리'));
  LeftContainer.insertAdjacentElement('beforeend', await HitGall('초개념'));

  RightContainer.insertAdjacentElement('beforeend', await LoginForm());
  RightContainer.insertAdjacentElement('beforeend', BookGall());

  SubContainer.insertAdjacentElement('beforeend', LeftContainer);
  SubContainer.insertAdjacentElement('beforeend', RightContainer);

  MainContainer.insertAdjacentElement('beforeend', SubContainer);

  return MainContainer;
};

export default MainPage;
