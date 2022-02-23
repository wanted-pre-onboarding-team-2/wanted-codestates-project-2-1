import React from "react";
import styled from "styled-components";

const Card = styled.a`
  display: block;
  list-style: none;
  background-color: lightcoral;
  width: 400px;
  margin: 10px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

const RepoName = styled.h3`
  font-size: 1.5rem;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Date = styled.span`
  font-size: 1rem;
`;

function IssueCard({ issue, repoInfo }) {
  const { html_url, title, user, created_at } = issue;

  return (
    <Card href={html_url} target="_blank">
      <Title>{title}</Title>
      <RepoName>{repoInfo}</RepoName>
      <Avatar src={user.avatar_url} />
      <Date>{created_at}</Date>
    </Card>
  );
}

export default IssueCard;
