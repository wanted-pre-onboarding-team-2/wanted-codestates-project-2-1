# 원티드 프리온보딩 프론트엔드 코스 - 페이히어

✨[결과물 보러가기](https://wanted-codestates-project-2-1.vercel.app/)✨

## 사용 스택

<p>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
</p>

<br />

## 요구사항

- [x] 1. Repository명을 입력해서 Repository를 검색할 수 있다.
- [x] 2. 검색된 Public Repository를 등록할 수 있다.
  - 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 이를 사용자에게 알려준다.
  - LocalStorage로 데이터 저장
- [x] 3. 등록된 Repository를 삭제할 수 있다.
- [x] 4. 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있다.
  - 각 issue 마다 제목, Repository 명은 필수로 표현되어야 한다. 그 이외의 데이터 중 필요하다고 생각되는 부분은 추가한다.
  - 해당 issue를 클릭하면 Github의 상세 페이지로 이동할 수 있다.
  - 페이지네이션을 통해서 계속해서 issue를 모아서 볼 수 있다.

<br />

## 기능 설명

### Home page

- 요구사항 1, 2, 3 번에 대한 기능을 하고 있습니다.
- Repository 검색 및 리스트 출력 ([박상우](https://github.com/SangWoo9734), [허민](https://github.com/hhhminme))
- Repository LocalStorage 등록 및 삭제 ([신항민](https://github.com/ssinking91), [강동진](https://github.com/jinn2u))

**Repository 검색 및 리스트 출력**

Repository 검색은 [Axios](https://axios-http.com/docs/intro)를 활용한 비동기 통신으로 구현을 하였습니다. 검색창에 검색하고자 하는 내용을 param으로 받아 해당 내용에 대해 구현을 하였습니다.
Enter 키와 검색 버튼을 통하여 검색을 실행할 수 있도록 구현하였습니다. 이때 input 내에 글자를 입력할 경우 다른 컴포넌트가 렌더링되는 것을 방지하고자 [useRef](https://reactjs.org/docs/hooks-reference.html#useref)를 사용하여 해당 검색 창의 내용을 가져오도록 구현하였습니다.

통신 후 응답받은 데이터를 출력하기 전에 [react-loader-spinner](https://mhnpd.github.io/react-loader-spinner/)를 활용한 로딩을 구현하였습니다. 출력된 목록은 전체 목록이 출력되어 페이지가 길어진다는 문제점이 있어 처음 10개만 보여지고 사용자가 더보기 버튼을 누르게 될 경우 이후의 30개가 보여지도록 구현하였습니다.

**Repository LocalStorage 등록 및 삭제**

### Issue page - 담당자 이름

<br />

## 팀원 소개

| 이름         | 깃허브                                        |
| ------------ | --------------------------------------------- |
| 강동진       | [jinn2u](https://github.com/jinn2u)           |
| 박상우       | [SangWoo9734](https://github.com/SangWoo9734) |
| 신항민       | [ssinking91](https://github.com/ssinking91)   |
| 이장민       | [leo-xee](https://github.com/leo-xee)         |
| 오카무라카에 | [kaehehehe](https://github.com/kaehehehe)     |
| 허민         | [hhhminme](https://github.com/hhhminme)       |
| 전호용       | [mooroom](https://github.com/mooroom)         |
