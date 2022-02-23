import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

// components
const RepoSearchContainer = styled.div``;
const RepoSearchInput = styled.input``;
const RepoSearchButton = styled.button``;
const RepoSearchResult = styled.div``;

function Home() {
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
            <div key={index}>
              <Link to={`/issues/${value.full_name.split("/").join("-")}`}>
                {value.full_name}
              </Link>
            </div>
          ))}
        </RepoSearchResult>
      </RepoSearchContainer>
    </>
  );
}

export default Home;
