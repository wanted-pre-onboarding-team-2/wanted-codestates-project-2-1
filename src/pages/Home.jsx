import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import RepoTitle from "../components/RepoTitle";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { verifySaveRepo } from "./verifySaveRepo";
// components

const RepoSearchInput = styled.input``;
const RepoSearchButton = styled.button``;
const RepoSearchResult = styled.div``;
function Home() {
  // states
  const [userInput, setUserInput] = useState("");
  const [repositoryList, setRepositoryList] = useState([]);
  const [savedRepos, setSavedRepos] = useLocalStorage("repo", []);
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
  const handleSaveRepo = repoName => {
    const isValid = verifySaveRepo(savedRepos, repoName);
    isValid && setSavedRepos([...savedRepos, repoName]);
  };

  const handleDeleteRepo = name => {
    const newRepo = savedRepos.filter(item => item !== name);
    setSavedRepos(newRepo);
  };
  return (
    <RepoSearchResult>
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
          /* <div key={index}> */
          <RepoTitle
            title={value.full_name}
            type="add"
            lazy
            threshold={0}
            onBtnClick={() => handleSaveRepo(value.full_name)}
          />
          /* <Link to={`/issues/${value.full_name.split("/").join("-")}`}>
                {value.full_name}
              </Link> 
          /* </div> */
        ))}
      </RepoSearchResult>
    </RepoSearchResult>
  );
}

export default Home;
