import styled from "styled-components";

const Wrapper = styled.div`
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};
  display: flex;
  align-items: center;
  padding-left: 10px;
  border: 1px solid lightgray;
  cursor: pointer;
  height: 100px;
  border-radius: 5px;
  font-size: 50px;
  font-weight: lighter;
`;

export { Wrapper };
