import { getInputElement, getButton, getLink, getContainer, getLabel } from '../common.js';

const LoginedForm = (id) => {
  const Container = getContainer('logined_container', null);
  const NameWrap = getContainer('name_wrap', null);
  const StatusWrap = getContainer('status_wrap', null);

  const ShowName = getLabel('logined_name', id + '님 반갑습니다!');

  const MyInfoButton = getButton('myinfo_btn', '내 정보');
  const Logoutbutton = getButton('logout_btn', '로그 아웃');

  NameWrap.insertAdjacentElement('beforeend', ShowName);
  StatusWrap.insertAdjacentElement('beforeend', MyInfoButton);
  StatusWrap.insertAdjacentElement('beforeend', Logoutbutton);
  Container.insertAdjacentElement('beforeend', NameWrap);
  Container.insertAdjacentElement('beforeend', StatusWrap);
  return Container;
};

export default LoginedForm;
