const express = require("express");
const app = express();
const ejs = require("ejs");
const { sequelize, Posts } = require("./database");

// DB 연결
sequelize.sync();
//씨퀄라이즈를 연결한다는 뜻

// ejs를 view 엔진으로 설정
app.set("view engine", "ejs");

// 정적파일 경로 지정
app.use(express.static("public"));

// home
app.get("/", function (요청, 응답) {
  응답.render("pages/index.ejs");
});

// about
app.get("/about", function (req, res) {
  res.render("pages/about.ejs");
});

const port = 3001;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
