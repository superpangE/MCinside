const getInputElement = (id, placeholder) => {
  const inputEle = document.createElement('input');
  inputEle.id = id;
  inputEle.placeholder = placeholder;
  return inputEle;
}

const getButton = (id, textContent) => {
  const button = document.createElement('button');
  button.id = id;
  button.textContent = textContent;
  return button;
}

const getLink = (className, href, text) => {
  const link = document.createElement('a');
  link.class = className;
  link.href = href;
  link.text = text;
  return link;
}

const getContaier = (id, className, type) => {
  const container = document.createElement('div');
  if(type == "className")
    container.className = className;
  else container.id = id; 
  return container;
}

const LoginForm = () => {
  const onClick = (e) => {
    // 서버로 아이디와 비밀번호를 보낸다.
    // 응답을 받는다.
    // 로그인이 됐으면 됐다고, 아니면 안됐다고 알려준다.
  }

  const loginContainer = getContaier("login_container", null, "id");
  const login_wraps = [];
  for(let i = 0; i < 3; i++){
    const login_wrap = getContaier(null, "login_wrap", "className");
    login_wraps.push(login_wrap);
  }

  const input_id = getInputElement("input_id", "아이디");
  const input_pw = getInputElement("input_pw", "비밀번호");

  const loginButton = getButton("loginButton", "로그인");
  loginButton.addEventListener('click', onClick);

  const join = getLink("join", "/", "회원가입");

  login_wraps[0].insertAdjacentElement('beforeend', input_id);
  login_wraps[1].insertAdjacentElement('beforeend', input_pw);
  login_wraps[1].insertAdjacentElement('beforeend', loginButton);
  login_wraps[2].insertAdjacentElement('beforeend', join);

  for(let i = 0; i < 3; i++){
    loginContainer.insertAdjacentElement('beforeend', login_wraps[i]);
  }

  return loginContainer;
};

export default LoginForm;
