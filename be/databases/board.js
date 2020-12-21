// 컬럼
// id : 기본키
// author : 글쓴이
// title : 제목
// content : 내용
// goodNum: 추천 갯수
// imgUrl: 이미지 url
// gallName: 갤러리 이름
// clicked : 조회수
// createAt :

const Board = [
  {
    id: 0,
    author: 'abc',
    title: '음식',
    content: '음식이 맛있다',
    goodNum: new Array(),
    imgUrl: 'https://wstatic.dcinside.com/main/main2011/2020/12/08/gall_66424_20201208153304.jpg',
    gallName: '국내야구',
    clicked: 10,
    createAt: '2020-12-17',
  },
  {
    id: 1,
    author: 'abc',
    title: '영화',
    content: '영화는 재밌다',
    goodNum: new Array(),
    imgUrl: 'https://wstatic.dcinside.com/main/main2011/2020/12/08/gall_66413_20201208101123.png',
    gallName: '토이',
    clicked: 10,
    createAt: '2020-12-17',
  },
  {
    id: 2,
    author: 'abc',
    title: '만화',
    content: '짱구는 잘말려',
    goodNum: new Array(),
    imgUrl: 'https://wstatic.dcinside.com/main/main2011/2013/12/07/gall_27768_hit.jpg',
    gallName: '헬스',
    clicked: 10,
    createAt: '2020-12-17',
  },
  {
    id: 3,
    author: 'abc',
    title: '[스압] 나무 총기는 못참지',
    content: '호호',
    goodNum: new Array(),
    imgUrl: 'https://wstatic.dcinside.com/main/main2011/2020/12/11/gall_66475_20201211102632.jpg',
    gallName: '에어소프트',
    clicked: 10,
    createAt: '2020-12-17',
  },
  {
    id: 4,
    author: 'abc',
    title: '하루히 이타샤 작업완료',
    content: 'ㅎㅎ',
    goodNum: new Array(),
    imgUrl: 'https://wstatic.dcinside.com/main/main2011/2020/12/10/gall_66463_20201210152451.jpg',
    gallName: '스즈미야 하루히',
    clicked: 10,
    createAt: '2020-12-17',
  },
];

module.exports = Board;
