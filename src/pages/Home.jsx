import React from "react";
import styled from "styled-components";
import RepoSearch from "../components/RepoSearch";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const HomeWrap = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
const FlexBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
`;
const RepoSave = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 200px;
`;

function Home() {
  const [savedRepos, setSavedRepos] = useLocalStorage("repo", []);
  const navigate = useNavigate();
  const handleDeleteRepo = name => {
    const newRepo = savedRepos.filter(item => item !== name);
    setSavedRepos(newRepo);
  };
  const parseRepoName = repoName => repoName.split("/").join("-");

  const handleSavedRepo = repoName => {
    const targetRepo = parseRepoName(repoName);
    navigate(`/issues/${targetRepo}`);
  };
  return (
    <HomeWrap>
      <FlexBox>
        <RepoSearch savedRepos={savedRepos} setSavedRepos={setSavedRepos} />
        <RepoSave>
          <ul>
            {savedRepos.map((val, idx) => (
              <li key={idx} onClick={() => handleSavedRepo(val)}>
                {val}
                <button onClick={() => handleDeleteRepo(val)}>삭제</button>
              </li>
            ))}
          </ul>
        </RepoSave>
      </FlexBox>
    </HomeWrap>
  );
}

export default Home;
