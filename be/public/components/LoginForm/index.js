import {getInputElement, getButton, getLink, getContainer} from "../common.js";

const LoginForm = () => {
  const loginContainer = getContainer("login_container", null, "id");
  const login_wraps = [];
  for (let i = 0; i < 3; i++) {
    const login_wrap = getContainer(null, "login_wrap", "className");
    login_wraps.push(login_wrap);
  }
  const input_id = getInputElement("input_id", "아이디");
  const input_pw = getInputElement("input_pw", "비밀번호");
  const loginButton = getButton("loginButton", "로그인");
  const join = getLink("join", "/", "회원가입");

  login_wraps[0].insertAdjacentElement("beforeend", input_id);
  login_wraps[1].insertAdjacentElement("beforeend", input_pw);
  login_wraps[1].insertAdjacentElement("beforeend", loginButton);
  login_wraps[2].insertAdjacentElement("beforeend", join);

  for (let i = 0; i < 3; i++) {
    loginContainer.insertAdjacentElement("beforeend", login_wraps[i]);
  }

  const onClick = async (e) => {
    // 서버로 아이디와 비밀번호를 보낸다.
    const mcId = input_id.value;
    const mcPw = input_pw.value;

    const URL = "http://localhost:3000/login?" + "id=" + mcId + "&pw=" + mcPw;

    // 서버로 데이터를 보내 응답을 기다린다.
    const response = await fetch(URL, {
      method: "get",
    });
    const data = await response.json();

    if (data === true) window.alert("로그인 성공");
    else window.alert("로그인 실패!");
  };

  loginButton.addEventListener("click", onClick);
  return loginContainer;
};

export default LoginForm;
