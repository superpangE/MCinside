const express = require("express");
const path = require("path");
const {Board, User, Comment} = require("./databases");

// const cookieParser = require("cookie-parser");
// const logger = require("morgan");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.get("/join", (req, res) => {
    const id = req.query.id;
    const nickName = req.query.nickName;
    const pw = req.query.pw;
    for(let i = 0; i < User.length; i++){
        if(User[i].id == id){
            return res.send('회원가입 실패!');
        }
    }
    User.push({id: id, nickName: nickName, pw: pw});
    res.send('회원가입 성공!');
});

app.get("/login", (req, res) =>{
    const id = req.query.id;
    const pw = req.query.pw;
    for(let i =0; i <User.length;i++){
        if(User[i].id == id && User[i].pw == pw){
            return res.send("Correct");
        }
    }
    res.send("Wrong ID or pw");
});

app.listen(3000);

module.exports = app;

// localhost:3000/join (id, password)
// localhost:3000/login (default: post)
// 검색창 -> localhost:3000/login get 요청
// 서버로 -> localhost:3000/login 인식 후 -> 응답 생성 후 -> 클라이언트 전달
