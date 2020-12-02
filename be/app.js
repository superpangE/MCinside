const express = require("express");
const path = require("path");

// var cookieParser = require("cookie-parser");
// var logger = require("morgan");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/join", (req, res) => {});

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.listen(3000);

module.exports = app;

// localhost:3000/join (id, password)
// localhost:3000/login (default: post)
// 검색창 -> localhost:3000/login get 요청
// 서버로 -> localhost:3000/login 인식 후 -> 응답 생성 후 -> 클라이언트 전달
