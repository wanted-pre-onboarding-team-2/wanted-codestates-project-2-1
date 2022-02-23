// 로딩이 되면 로컬스토리지에서 저장된것을 가져온다.
// 로컬 스토리지에서 가져온 데이터는 UseState로 관리를 한다.
// 로컬스토리지 추가 / 삭제기능

import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const getLocalStorage = key => {
    try {
      const items = localStorage.getItem(key);
      const validItems = items ? JSON.parse(items) : initialValue;
      return validItems;
    } catch (e) {
      console.error(e);
      return initialValue;
    }
  };

  const [storageItems, setStorageItems] = useState(() => getLocalStorage(key));

  const setLocalStorage = value => {
    try {
      if (!value) return;
      localStorage.setItem(key, JSON.stringify(value));
      setStorageItems(value);
    } catch (e) {
      console.error(e);
      localStorage.setItem(key, JSON.stringify(initialValue));
      setStorageItems(initialValue);
    }
  };

  return [storageItems, setLocalStorage];
};

// const setIssue = el => {
//   //중복제거
//   if (JSON.parse(localStorage.getItem("repos")).length > 0) {
//     if (JSON.parse(localStorage.getItem("repos")).includes(el)) {
//       return window.alert("이미 등록 되어 있습니다🔥");
//     }
//   }
//   // 꺼내올때: 객체로 만들기(JSON.parse)고 저장할때 : 문자열로 만들기(JSON.stringify)
//   else if (JSON.parse(localStorage.getItem("repos")).length >= 4) {
//     return window.alert("등록 개수는 최대 4개를 넘을수 없습니다🔥");
//   }
//   //맨처음 객체를 넣고 저장할땐 문자열이 아닌 객체기 때문에 JSON.parse를 적용
//   const repos = JSON.parse(localStorage.getItem("repos")) || [];
//   repos.push(el);
//   //[object Object] 라는 스트링만 나옴 그래서 string으로 변환해준 다음에 넣어줘야함
//   localStorage.setItem("repos", JSON.stringify(repos));
// };

// const delIssue = el => {
//   const repos = JSON.parse(localStorage.getItem("repos"));
//   const newRepos = repos.filter(item => {
//     return item !== el;
//   });
//   localStorage.setItem("repos", JSON.stringify(newRepos));
// };

// export { getIssue, setIssue, delIssue };

// // index에 해당하는 키 소환 : localStorage.key(index)
// // 저장된 항목의 수 : localStorage.length

// // JSON.stringifty : JavaScript 객체를 JSON 텍스트로 바꾸고 해당 JSON 텍스트를 문자열에 저장
// // JSON.parse : JSON 텍스트 문자열을 JavaScript 객체로 변환
