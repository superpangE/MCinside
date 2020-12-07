const express = require("express");
const path = require("path");
const { Board, User, Comment } = require("./databases");

const app = express();

// localhost:3000/join (id, password)
// localhost:3000/login (default: post)
// 검색창 -> localhost:3000/login get 요청
// 서버로 -> localhost:3000/login 인식 후 -> 응답 생성 후 -> 클라이언트 전달
// json -> {name: "이기훈", pw: "1234"}, false

app.use(express.static(path.join(__dirname, "public")));

app.get("/join", (req, res) => {
  const id = req.query.id;
  const nickName = req.query.nickName;
  const pw = req.query.pw;
  for (let i = 0; i < User.length; i++) {
    if (User[i].id == id) {
      return res.json(false);
    }
  }
  User.push({ id: id, nickName: nickName, pw: pw });
  res.json(true);
});

app.get("/login", (req, res) => {
  const id = req.query.id;
  const pw = req.query.pw;
  for (let i = 0; i < User.length; i++) {
    if (User[i].id == id && User[i].password == pw) {
      return res.json(true);
    }
  }
  res.json(false);
});

app.get("/board", (req, res) => {
  res.json({ board: Board });
});

app.listen(3000);

module.exports = app;
