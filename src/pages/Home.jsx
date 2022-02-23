import React from "react";
import styled from "styled-components";
import RepoSearch from "../Components/RepoSearch";
const HomeWrap = styled.div`
  display: flex;
  justify-content: center;
`;

function Home() {
  return (
    <HomeWrap>
      <RepoSearch />
      <div>
        <h1>Registered Repo</h1>
        <div>Repo1</div>
        <div>Repo2</div>
        <div>Repo3</div>
      </div>
    </HomeWrap>
  );
}

export default Home;
