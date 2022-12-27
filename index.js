const express = require("express");
const app = express();
const ejs = require("ejs");
const { sequelize, Posts } = require("./database");

// DB 연결
sequelize.sync().then(function () {
  console.log("데이터 연결 완료");
});
//씨퀄라이즈를 연결한다는 뜻

// ejs를 view 엔진으로 설정
app.set("view engine", "ejs");

// 정적파일 경로 지정
app.use(express.static("public"));

// home
app.get("/", async function (req, res) {
  // db 불러오기
  // 변수 소문자,대문자 주의 / 여기서 Posts는 표
  const posts = await Posts.findAll();
  console.log(JSON.stringify(posts, null, 2));
  res.render("pages/index.ejs", { posts });
  // 비동기 함수라는걸 알려주기 위해서 콜백함수 이전에 async 입력 , sync는 순서대로 입력되는데 async(비동기)는 로딩이 될 때 휙 넘어갈 수 있음 => await를 걸어야함 = posts 값이 보임
});

// about
app.get("/about", function (req, res) {
  res.render("pages/about.ejs");
});

const port = 3001;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
