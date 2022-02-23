import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loading";

import * as S from "./style";
import GitLogo from "../../assets/gitIcon.png";
import { verifySaveRepo } from "../verifySaveRepo";

function RepoSearch({ savedRepos, setSavedRepos }) {
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
      .get("https://api.github.com/search/repositories", {
        params: {
          q: userInput,
        },
      })
      .then(response => {
        setRepositoryList(response.data.items);
        setLoadingState(0);
      })
      .catch(Error => {
        console.error(Error);
      });
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

  const handleSaveRepo = repoName => {
    const isValid = verifySaveRepo(savedRepos, repoName);
    isValid && setSavedRepos([...savedRepos, repoName]);
  };

  return (
    <>
      <S.RepoSearchContainer>
        <h1>Github issue searcher</h1>
        <S.RepoSearchWrap>
          <S.RepoSearchInput
            type="text"
            name="repositorySearch"
            placeholder="search..."
            // FIXME: useRef 로 수정.
            onChange={e => {
              setUserInput(e.target.value);
            }}
          />
          <S.RepoSearchButton onClick={getRepositoryData}>
            검색
          </S.RepoSearchButton>
        </S.RepoSearchWrap>
        <S.RepoSearchResult>
          {loadingState ? (
            <Loader />
          ) : (
            <>
              {repositoryList === [] && (
                <div>
                  <S.CountImpact>{repositoryList.length}</S.CountImpact> 개의
                  검색 결과
                </div>
              )}
              {repositoryList.slice(0, endView).map((value, index) => (
                <S.RepoSearchItem
                  className={`repositoryItem-${index}`}
                  key={index}
                >
                  <S.RepoSearchItemList>
                    <S.GitIcon src={GitLogo} />
                    <p>{value.full_name}</p>
                  </S.RepoSearchItemList>
                  {/* TODO : 여기에 추가해주세요! */}
                  <button onClick={() => handleSaveRepo(value.full_name)}>
                    추가
                  </button>
                </S.RepoSearchItem>
              ))}
              {repositoryList.length > 10 && (
                <S.MoreButton onClick={e => handleMoreView(e)}>
                  더보기
                </S.MoreButton>
              )}
            </>
          )}
        </S.RepoSearchResult>
      </S.RepoSearchContainer>
    </>
  );
}

export default RepoSearch;
