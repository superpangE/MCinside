const LoginForm = () => {
  return `
  <div class = "login_container">
    <div class = "login_wrap">
      <input type="text" id = "input_id" placeholder = "아이디"/>
    </div>
    <div class = "login_wrap">
      <input type="text" id = "input_pw" placeholder = "비밀번호"/>
      <button id = "logInBtn">로그인</button>
    </div>
    <div class = "login_wrap">
      <a href="">회원가입</a>
      <a href="">아이디/비밀번호 찾기</a>
    </div>
  </div>
  `;
};

export default LoginForm;
