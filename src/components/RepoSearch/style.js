import styled from "styled-components";

export const RepoSearchContainer = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 20px 30px;

  @media screen and (max-width: 716px) {
    width: 100%;
    height: fit-content;
    border-bottom: 1px solid black;
  }
`;
export const RepoSearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const RepoSearchInput = styled.input`
  padding-left: 5px;
  width: 85%;
`;
export const RepoSearchButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 7px;
`;
export const CountImpact = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: orange;
`;
export const RepoSearchResult = styled.div`
  height: calc(100vh - 120px);
  padding-top: 5px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 716px) {
    height: calc(100vh - 300px);
  }
`;
export const GitIcon = styled.img`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
export const RepoSearchItem = styled.div`
  border: 1px solid;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px 10px;
`;

export const MoreButton = styled.button`
  width: 100%;
  height: 30px;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
`;
export const RepoSearchItemList = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const RepoSearchItemName = styled.p`
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 90%;
`;
