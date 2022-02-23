import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import IssueCard from "../Components/IssueCard/IssueCard";
import styled from "styled-components";

const Cards = styled.div`
  display: flex;
`;

function Issues() {
  const { repoInfo } = useParams();
  const [owner, repo] = repoInfo.split("-");

  const [issues, setIssues] = useState(null);

  const fetchIssues = async currentPage => {
    const res = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/issues?page=${currentPage}`,
    );
    console.log(res.data);
    return res.data;
  };

  const handlePageClick = async data => {
    let currentPage = data.selected + 1;
    const issuesFromServer = await fetchIssues(currentPage);

    setIssues(issuesFromServer);
  };

  useEffect(() => {
    const initFetch = async () => {
      const issuesFromServer = await fetchIssues(1);
      setIssues(issuesFromServer);
    };

    initFetch();
  }, []);

  return (
    <>
      <Cards>[{repoInfo} ISSUES]</Cards>
      {issues &&
        issues.map((issue, idx) => (
          <IssueCard key={idx + 1} issue={issue} repoInfo={repoInfo} />
        ))}
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={10}
        pageRangeDisplayed={6}
        onPageChange={handlePageClick}
        containerClassName={""}
        pageClassName={""}
        pageLinkClassName={""}
        previousClassName={""}
        previousLinkClassName={""}
        nextClassName={""}
        nextLinkClassName={""}
        breakClassName={""}
        breakLinkClassName={""}
        activeClassName={""}
      />
    </>
  );
}

export default Issues;
