import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// image
import GitLogo from "../img/gitIcon.png";

// components
import Loader from "./Loading";

const RepoSearchContainer = styled.div`
  max-width: 500px;
  padding: 20px 30px;

  @media screen and (max-width: 716px) {
    width: 100%;
    height: fit-content;
    border-bottom: 1px solid black;
  }
`;
const RepoSearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const RepoSearchInput = styled.input`
  padding-left: 5px;
  width: 85%;
`;
const RepoSearchButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 7px;
`;
const CountImpact = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: orange;
`;
const RepoSearchResult = styled.div`
  height: calc(100vh - 120px);
  padding-top: 5px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 716px) {
    height: calc(100vh - 320px);
  }
`;
const GitIcon = styled.img`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const RepoSearchItem = styled.div`
  border: 1px solid;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px 10px;
`;
const RepoSaveButton = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  text-align: center;
  color: white;
`;
const MoreButton = styled.button`
  width: 100%;
  height: 30px;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
`;
const RepoSearchItemList = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`;

function RepoSearch() {
  // state
  const [userInput, setUserInput] = useState("");
  const [repositoryList, setRepositoryList] = useState([]);
  const [loadingState, setLoadingState] = useState(0);
  const [endView, setEndView] = useState(10);

  const getRepositoryData = () => {
    if (userInput === "") {
      return 0;
    }

    if (endView !== 10) {
      setEndView(10);
    }
    setLoadingState(1);
    axios
      .get("http://api.github.com/search/repositories", {
        params: {
          q: userInput,
        },
      })
      .then(response => {
        setRepositoryList(response.data.items);
        setLoadingState(0);
      })
      .catch(Error => {
        console.log(Error);
      });
  };

  const addStyleOnItem = index => {
    document.querySelector(`.repositoryItem-${index}`).style.background =
      "#c9ffd2";
    document.querySelector(`.checkMark-${index}`).style.background = "#238636";
  };

  const handleMoreView = e => {
    let showMoreValue = e.target.innerText;
    if (showMoreValue === "더보기") {
      e.target.innerText = "접기";
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
        <RepoSearchResult>
          {loadingState ? (
            <Loader />
          ) : (
            <>
              {repositoryList === [] ? (
                <div>
                  <CountImpact>{repositoryList.length}</CountImpact> 개의 검색
                  결과
                </div>
              ) : null}
              {repositoryList.slice(0, endView).map((value, index) => (
                <RepoSearchItem
                  className={`repositoryItem-${index}`}
                  key={index}
                  onClick={() => addStyleOnItem(index)}
                >
                  <RepoSearchItemList>
                    <GitIcon src={GitLogo} />
                    <p>{value.full_name}</p>
                  </RepoSearchItemList>
                  <RepoSaveButton className={`checkMark-${index}`}>
                    ✓
                  </RepoSaveButton>
                </RepoSearchItem>
              ))}
            </>
          )}
          {repositoryList.length > 10 ? (
            <MoreButton onClick={e => handleMoreView(e)}>더보기</MoreButton>
          ) : null}
        </RepoSearchResult>
      </RepoSearchContainer>
    </>
  );
}

export default RepoSearch;
