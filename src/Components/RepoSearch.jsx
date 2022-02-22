import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
// components
const RepoSearchContainer = styled.div`
  width: 400px;
  padding: 10px;
`;
const RepoSearchInput = styled.input``;
const RepoSearchButton = styled.button``;
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

  const getRepositoryData = () => {
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

  return (
    <>
      <RepoSearchContainer>
        <div>
          <RepoSearchInput
            type="text"
            name="repositorySearch"
            onChange={e => {
              setUserInput(e.target.value);
            }}
          />
          <RepoSearchButton onClick={getRepositoryData}>검색</RepoSearchButton>
        </div>
        <RepoSearchResult className="search-result-container">
          {repositoryList.map((value, index) => (
            <RepoSearchItem key={index}>
              <RepoSearchItemList>{value.full_name}</RepoSearchItemList>
              <button>추가</button>
            </RepoSearchItem>
          ))}
        </RepoSearchResult>
      </RepoSearchContainer>
    </>
  );
}

export default RepoSearch;
