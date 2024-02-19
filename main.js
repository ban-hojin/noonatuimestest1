// 1. url(주소)를 키값을 넣고 가져온다
// 2. 키값을 변수로 저장
// 3. 인스턴스 객체 생성 (new url)
// 4. fetch 함수를 통해 뉴스 가져오기
// 5. await를 통해 함수를 기다린다.(비동기 함수)
// 6. 받은 자료를 json 형식을 통해 받아온다.(비동기 함수)
// 7. 전체 코딩을 위해 변수 재할당


let news=[]
const getLatestNews = async () => {
 const url = new URL(
  `https://noonatimestest.netlify.app/`
);
 const response = await fetch(url);
 const data = await response.json();
 news = data.articles;
 console.log("ddddd",news);
};
getLatestNews();
