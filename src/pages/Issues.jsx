import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";

import IssueCard from "../components/IssueCard";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 50px;
  padding-bottom: 200px;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const HomeButton = styled(Link)`
  background: #2da44e;
  padding: 10px;
  font-size: 20px;
  color: white;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 10px;
`;

const PageTitle = styled.div`
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 50px;
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
      <HomeButton to="/">HOME</HomeButton>
      <Container>
        <PageTitle>{repoInfo && `${owner}/${repo}`} ISSUES</PageTitle>
        <CardContainer>
          {issues &&
            issues.map((issue, idx) => (
              <IssueCard key={idx + 1} issue={issue} repoInfo={repoInfo} />
            ))}
        </CardContainer>

        {issues && (
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={10}
            pageRangeDisplayed={6}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        )}
      </Container>
    </>
  );
}

export default Issues;
