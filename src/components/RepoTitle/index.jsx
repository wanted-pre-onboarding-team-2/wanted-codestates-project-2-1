import { useEffect, useRef, useState } from "react";
import { useInterSectionObserver } from "../../hooks/useInterSectionObserver";
import { Wrapper, AddBtn, H1 } from "./style";

const RepoTitle = ({ title, type, onBtnClick, lazy, threshold }) => {
  console.log(lazy);
  const [loaded, setLoaded] = useState(false);
  const titleRef = useRef(null);

  const bgColor = type === "add" ? "cornflowerblue" : "lightcoral";
  const btnContent = type === "add" ? "추가" : "삭제";
  const isShow = !lazy ? true : lazy && loaded ? true : false;

  let observer = null;

  useInterSectionObserver(titleRef, setLoaded, threshold, lazy, observer);

  return (
    <Wrapper ref={titleRef}>
      {isShow && (
        <>
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
        </>
      )}
    </Wrapper>
  );
};
export default RepoTitle;
