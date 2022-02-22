import styled from "styled-components";
import Button from "../Button";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  height: 75px;
  border: 1px solid lightgray;
  cursor: pointer;
  border-radius: 5px;
  width: 470px;
  padding-left: 10px;
`;

const H1 = styled.h1`
  width: 360px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-word;
  font-size: 50px;
  font-weight: lighter;
`;
const AddBtn = styled(Button)`
  position: absolute;
  font-weight: lighter;
  top: 20px;
  right: 10px;
`;

export { Wrapper, AddBtn, H1 };
