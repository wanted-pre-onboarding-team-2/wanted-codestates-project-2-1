import React, { useState, useRef } from "react";
import axios from "axios";
import Loader from "../Loading";

import * as S from "./style";
import GitLogo from "../../assets/gitIcon.png";
import { verifySaveRepo } from "../verifySaveRepo";

function RepoSearch({ savedRepos, setSavedRepos }) {
  const [repositoryList, setRepositoryList] = useState([]);
  const [loadingState, setLoadingState] = useState(0);
  const [endView, setEndView] = useState(10);
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const searchWordInputRef = useRef("");

  const getRepositoryData = async () => {
    try {
      const res = await axios.get(
        "https://api.github.com/search/repositories",
        {
          params: {
            q: searchWordInputRef.current.value,
          },
        },
      );
      setRepositoryList(res.data.items);
      setLoadingState(0);
    } catch (err) {
      console.error(Error);
    }
  };

  const enterKeyControl = event => {
    if (searchWordInputRef.current.value) {
      if (event.key === "Enter") {
        getRepositoryData();
      }
    }
  };

  const handleSearchClick = () => {
    if (searchWordInputRef.current.value === "") {
      return 0;
    }

    if (endView !== 10) {
      setEndView(10);
    }
    setLoadingState(1);

    getRepositoryData();
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
    if (isValid === "overflow") {
      setModalContent("4개 이상 저장하실 수 없습니다. 😅");

      setModalState(true);
    } else if (isValid === "already") {
      setModalContent("이미 저장되었습니다. 😅");
      setModalState(true);
    } else {
      setSavedRepos([...savedRepos, repoName]);
    }
  };

  return (
    <>
      {modalState && (
        <>
          <S.ModalWrap>
            <S.ModalCard>
              <S.ModalContentWrap>
                <S.ModalContent>{modalContent}</S.ModalContent>
              </S.ModalContentWrap>
              <S.ModalCloseBtn
                type="button"
                onClick={() => setModalState(false)}
              >
                닫기
              </S.ModalCloseBtn>
            </S.ModalCard>
          </S.ModalWrap>
          <S.modalBackground></S.modalBackground>
        </>
      )}
      <S.RepoSearchContainer>
        <S.RepoSearchWrap>
          <S.RepoSearchInput
            type="text"
            name="repositorySearch"
            placeholder="search..."
            onKeyDown={enterKeyControl}
            ref={searchWordInputRef}
          />
          <S.RepoSearchButton onClick={handleSearchClick}>
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
