import styled from "styled-components";

export const RepoSearchContainer = styled.div`
  flex: 2;

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
  padding: 20px;

  button {
    padding: 5px 10px;
    background-color: #4ceb7c;
    font-weight: bold;
    color: white;
    border-radius: 5px;
  }
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

export const ModalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  inset: 0;
  z-index: 50;
`;

export const ModalCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 25%;
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  background-color: white;
`;

export const ModalCloseBtn = styled.button`
  padding: 0.5rem 1.5rem;
  color: black;
  font-weight: bold;
`;

export const ModalContentWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.25rem;
  font-weight: 600;
`;

export const ModalContent = styled.h2`
  font-weight: 600;
`;

export const modalBackground = styled.div`
  opacity: 0.25;
  position: fixed;
  inset: 0;
  z-index: 40;
  background-color: black;
`;
