import { Wrapper } from "./style";

const Title = ({ title, width = 300, ...props }) => {
  return (
    <Wrapper width={width} {...props}>
      {title}
    </Wrapper>
  );
};
export default Title;
