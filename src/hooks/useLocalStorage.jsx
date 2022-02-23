const getIssue = () => {
  const repos = JSON.parse(localStorage.getItem("repos"));
  return repos;
};

const setIssue = el => {
  //중복제거
  if (JSON.parse(localStorage.getItem("repos")).length > 0) {
    if (JSON.parse(localStorage.getItem("repos")).includes(el)) {
      return window.alert("이미 등록 되어 있습니다🔥");
    }
  }
  // 꺼내올때: 객체로 만들기(JSON.parse)고 저장할때 : 문자열로 만들기(JSON.stringify)
  else if (JSON.parse(localStorage.getItem("repos")).length >= 4) {
    return window.alert("등록 개수는 최대 4개를 넘을수 없습니다🔥");
  }
  //맨처음 객체를 넣고 저장할땐 문자열이 아닌 객체기 때문에 JSON.parse를 적용
  const repos = JSON.parse(localStorage.getItem("repos")) || [];
  repos.push(el);
  //[object Object] 라는 스트링만 나옴 그래서 string으로 변환해준 다음에 넣어줘야함
  localStorage.setItem("repos", JSON.stringify(repos));
};

const delIssue = el => {
  const repos = JSON.parse(localStorage.getItem("repos"));
  const newRepos = repos.filter(item => {
    return item !== el;
  });
  localStorage.setItem("repos", JSON.stringify(newRepos));
};

export { getIssue, setIssue, delIssue };

// index에 해당하는 키 소환 : localStorage.key(index)
// 저장된 항목의 수 : localStorage.length

// JSON.stringifty : JavaScript 객체를 JSON 텍스트로 바꾸고 해당 JSON 텍스트를 문자열에 저장
// JSON.parse : JSON 텍스트 문자열을 JavaScript 객체로 변환
