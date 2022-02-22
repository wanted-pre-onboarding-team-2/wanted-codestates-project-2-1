import React from "react";
import styled from "styled-components";

const Card = styled.a`
  display: block;
  list-style: none;
  background-color: lightcoral;
  width: 400px;
  height: 100px;
  margin: 10px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 18px;
`;

const RepoName = styled.h3`
  font-size: 15px;
`;

function IssueCard({ issue, repoInfo }) {
  const { html_url, title, img } = issue;

  return (
    <Card href={html_url}>
      <Title>{title}</Title>
      <RepoName>{repoInfo}</RepoName>
    </Card>
  );
}

export default IssueCard;
