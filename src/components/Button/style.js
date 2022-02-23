import styled from "styled-components";

const Btn = styled.button`
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: 5px;
`;
export { Btn };
