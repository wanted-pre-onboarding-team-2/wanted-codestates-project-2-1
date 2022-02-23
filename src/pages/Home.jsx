import React from "react";
import styled from "styled-components";
import RepoSearch from "../Components/RepoSearch";

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
  return (
    <HomeWrap>
      <FlexBox>
        <RepoSearch />
        <RepoSave>
          <h1>Registered Repo</h1>
          <div>Repo1</div>
          <div>Repo2</div>
          <div>Repo3</div>
        </RepoSave>
      </FlexBox>
    </HomeWrap>
  );
}

export default Home;
