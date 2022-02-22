import { Wrapper, AddBtn, H1 } from "./style";

const RepoTitle = ({ title, type, onBtnClick }) => {
  const bgColor = type === "add" ? "cornflowerblue" : "lightcoral";
  const btnContent = type === "add" ? "추가" : "삭제";

  return (
    <Wrapper>
      <H1>{title}</H1>
      <AddBtn
        width={50}
        height={30}
        color="white"
        bgColor={bgColor}
        onBtnClick={onBtnClick}
      >
        {btnContent}
      </AddBtn>
    </Wrapper>
  );
};
export default RepoTitle;
