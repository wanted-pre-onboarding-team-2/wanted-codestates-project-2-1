import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
// components
const RepoSearchContainer = styled.div`
  width: 400px;
  padding: 10px;
`;

const RepoSearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RepoSearchInput = styled.input`
  padding-left: 5px;
  width: 90%;
`;
const RepoSearchButton = styled.button`
  margin-right: ;
`;
const RepoSearchResult = styled.div`
  padding-top: 5px;
`;
const RepoSearchItem = styled.div`
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 3px;
`;
const RepoSearchItemList = styled.li`
  list-style: none;
`;
function RepoSearch() {
  // states

  const [userInput, setUserInput] = useState("");
  const [repositoryList, setRepositoryList] = useState([]);
  const [endView, setEndView] = useState(10);
  const getRepositoryData = () => {
    if (endView !== 10) {
      setEndView(10);
    }
    axios
      .get("http://api.github.com/search/repositories", {
        params: {
          q: userInput,
        },
      })
      .then(response => {
        setRepositoryList(response.data.items);
        console.log(response.data.items);
        console.log(repositoryList);
      })
      .catch(Error => {
        console.log(Error);
      });
  };

  const handleMoreView = e => {
    let showMoreValue = e.target.innerText;
    if (showMoreValue === "더보기") {
      e.target.innerText = "닫기";
      setEndView(30);
    } else {
      e.target.innerText = "더보기";
      setEndView(10);
    }
  };

  return (
    <>
      <RepoSearchContainer>
        <h1>Github issue searcher</h1>
        <RepoSearchWrap>
          <RepoSearchInput
            type="text"
            name="repositorySearch"
            placeholder="search..."
            onChange={e => {
              setUserInput(e.target.value);
            }}
          />
          <RepoSearchButton onClick={getRepositoryData}>검색</RepoSearchButton>
        </RepoSearchWrap>
        <RepoSearchResult className="search-result-container">
          {repositoryList.slice(0, endView).map((value, index) => (
            <RepoSearchItem key={index}>
              <RepoSearchItemList>{value.full_name}</RepoSearchItemList>
              <button>추가</button>
            </RepoSearchItem>
          ))}
          {repositoryList.length !== 0 ? (
            <button onClick={e => handleMoreView(e)}>더보기</button>
          ) : null}
        </RepoSearchResult>
      </RepoSearchContainer>
    </>
  );
}

export default RepoSearch;
