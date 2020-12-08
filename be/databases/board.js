// 컬럼
// id : 기본키
// author : 글쓴이
// title : 제목
// content : 내용
// goodNum: 추천 갯수
// imgUrl: 이미지 url
// gallName: 갤러리 이름

const Board = [
  {
    id: 0,
    author: "abc",
    title: "음식",
    content: "음식이 맛있다",
    goodNum: 2,
    imgUrl: "https://wstatic.dcinside.com/main/main2011/2020/12/08/gall_66424_20201208153304.jpg",
    gallName: "국내야구",
  },
  {
    id: 1,
    author: "abc",
    title: "영화",
    content: "영화는 재밌다",
    goodNum: 4,
    imgUrl: "https://wstatic.dcinside.com/main/main2011/2020/12/08/gall_66413_20201208101123.png",
    gallName: "토이",
  },
  {
    id: 2,
    author: "abc",
    title: "만화",
    content: "짱구는 잘말려",
    goodNum: 10,
    imgUrl: "https://wstatic.dcinside.com/main/main2011/2013/12/07/gall_27768_hit.jpg",
    gallName : "헬스",
  },
];

module.exports = Board;
