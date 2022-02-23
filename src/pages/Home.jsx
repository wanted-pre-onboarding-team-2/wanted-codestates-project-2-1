import React from "react";
import styled from "styled-components";
import RepoSearch from "../components/RepoSearch";
import { useLocalStorage } from "../hooks/useLocalStorage";

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
  const handleDeleteRepo = name => {
    const newRepo = savedRepos.filter(item => item !== name);
    setSavedRepos(newRepo);
  };
  return (
    <HomeWrap>
      <FlexBox>
        <RepoSearch savedRepos={savedRepos} setSavedRepos={setSavedRepos} />
        <RepoSave>
          {savedRepos.map((val, idx) => (
            <ul key={idx}>
              <li>
                {val}
                <button onClick={() => handleDeleteRepo(val)}>삭제</button>
              </li>
            </ul>
          ))}
        </RepoSave>
      </FlexBox>
    </HomeWrap>
  );
}

export default Home;
