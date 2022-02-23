import styled from "styled-components";
import Button from "../Button";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  height: 75px;
  border: 1px solid lightgray;
  cursor: pointer;
  border-radius: 5px;
  width: 50%;
  padding-left: 10px;
`;

const H1 = styled.h1`
  width: 75%;
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
