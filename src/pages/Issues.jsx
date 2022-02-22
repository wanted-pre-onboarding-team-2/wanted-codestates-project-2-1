import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { isS } from "xmlchars/xml/1.0/ed5";
import IssueCard from "../IssueCard";
import styled from "styled-components";

const Cards = styled.ul`
  display: flex;
`;

function Issues() {
  const { repoInfo } = useParams();
  const [issues, setIssues] = useState(null);

  useEffect(() => {
    const [owner, repo] = repoInfo.split("-");
    console.log(owner);
    console.log(repo);

    const fetchIssues = async () => {
      const res = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/issues`,
      );
      console.log(res.data);
      setIssues(res.data);
    };

    fetchIssues();
  }, [repoInfo]);

  return (
    <>
      <Cards>[{repoInfo} ISSUES]</Cards>
      {issues &&
        issues.map((issue, idx) => (
          <IssueCard key={idx + 1} issue={issue} repoInfo={repoInfo} />
        ))}
    </>
  );
}

export default Issues;
