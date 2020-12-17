/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-destructuring */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { Board, User } = require('./databases');
const app = express();
const session = {};

// localhost:3000/join (id, password)
// localhost:3000/login (default: post)
// 검색창 -> localhost:3000/login get 요청
// 서버로 -> localhost:3000/login 인식 후 -> 응답 생성 후 -> 클라이언트 전달
// json -> {name: "이기훈", pw: "1234"}, false

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/join', (req, res) => {
  const id = req.body.id;
  const nickName = req.body.nickName;
  const pw = req.body.pw;
  for (let i = 0; i < User.length; i++) {
    if (User[i].id === id) {
      return res.json(false);
    }
  }
  User.push({ id: id, nickName: nickName, pw: pw });
  res.json(true);
});

app.post('/login', (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;
  for (let i = 0; i < User.length; i++) {
    if (User[i].id === id && User[i].password === pw) {
      session[id] = id;
      res.cookie('cookie', id, {
        maxAge: 60 * 60 * 1000,
      });
      return res.json(true);
    }
  }
  res.json(false);
});

app.get('/board', (req, res) => {
  res.json({ board: Board });
});

app.get('/isLogined', (req, res) => {
  const id = session[req.cookies.cookie];
  if (id) {
    for (let i = 0; i < User.length; i++) {
      if (User[i].id == id) {
        return res.json({
          status: true,
          id: id,
        });
      }
    }
  } else
    res.json({
      status: false,
    });
});

app.get('/logout', (req, res) => {
  const id = session[req.cookies.cookie];
  if (id) {
    session[req.cookies.cookie] = undefined;
    return res.json({ status: true });
  }
  res.json({ status: false });
});

app.listen(3000);

module.exports = app;
