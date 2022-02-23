import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import RepoSearch from "../components/RepoSearch";
import { useLocalStorage } from "../hooks/useLocalStorage";

const HomeWrap = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 50px;
  padding-bottom: 200px;
`;

const PageTitle = styled.div`
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 50px;
`;

const ListContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

const RepoSave = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 200px;
  flex: 1;

  ul {
    list-style: none;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    min-width: 200px;

    button {
      background: #ff6f6f;
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
    }
  }

  li + li {
    margin-top: 10px;
  }
`;

function Home() {
  const [savedRepos, setSavedRepos] = useLocalStorage("repo", []);
  const handleDeleteRepo = name => {
    const newRepo = savedRepos.filter(item => item !== name);
    setSavedRepos(newRepo);
  };

  return (
    <HomeWrap>
      <PageTitle>Github Issue Searcher</PageTitle>
      <ListContainer>
        <RepoSearch savedRepos={savedRepos} setSavedRepos={setSavedRepos} />
        <RepoSave>
          <ul>
            {savedRepos.map((val, idx) => {
              const [owner, repo] = val.split("/");
              return (
                <li key={idx}>
                  <Link to={`/issues/${owner}-${repo}`}>{val}</Link>
                  <button onClick={() => handleDeleteRepo(val)}>삭제</button>
                </li>
              );
            })}
          </ul>
        </RepoSave>
      </ListContainer>
    </HomeWrap>
  );
}

export default Home;
