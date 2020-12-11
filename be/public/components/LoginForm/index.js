/* eslint-disable no-useless-concat */
/* eslint-disable prefer-template */
import { getInputElement, getButton, getLink, getContainer } from '../common';

const LoginForm = () => {
  const loginContainer = getContainer('login_container', null);
  const loginWraps = [];
  for (let i = 0; i < 3; i++) {
    const loginWrap = getContainer(null, 'login_wrap');
    loginWraps.push(loginWrap);
  }
  const inputId = getInputElement('input_id', '아이디');
  const inputPw = getInputElement('input_pw', '비밀번호');
  const loginButton = getButton('loginButton', '로그인');
  const join = getLink('join', '/', '회원가입');

  loginWraps[0].insertAdjacentElement('beforeend', inputId);
  loginWraps[1].insertAdjacentElement('beforeend', inputPw);
  loginWraps[1].insertAdjacentElement('beforeend', loginButton);
  loginWraps[2].insertAdjacentElement('beforeend', join);

  for (let i = 0; i < 3; i++) {
    loginContainer.insertAdjacentElement('beforeend', loginWraps[i]);
  }

  const onClick = async () => {
    // 서버로 아이디와 비밀번호를 보낸다.
    const mcId = inputId.value;
    const mcPw = inputPw.value;

    const URL = 'http://localhost:3000/login?' + 'id=' + mcId + '&pw=' + mcPw;

    // 서버로 데이터를 보내 응답을 기다린다.
    const response = await fetch(URL, {
      method: 'get',
    });
    const data = await response.json();

    if (data === true) window.alert('로그인 성공');
    else window.alert('로그인 실패!');
  };

  loginButton.addEventListener('click', onClick);
  return loginContainer;
};

export default LoginForm;
