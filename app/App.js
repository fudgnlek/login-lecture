"use strict";

// 모듈
const express = require("express");
// require 명령어로 express라는 모듈 다운
const app = express();
const PORT = 3000;

// 라우팅
const home = require("./src/routes/home");
// 폴더를 상대적으로 명시해줘야함
// 이 경우 저 경로에 있는 home 폴더 안에 있는
// JS 코드를 읽어와줘 라고 하는 것 

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine","ejs");

app.use("/", home);
// use -> 미들 웨어를 등록해주는 메서드
// /(루트) 경로로 들어오면 home이라는 경로로 보내줌

module.exports = app;
