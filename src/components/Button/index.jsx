import { Btn } from "./style";

const Button = ({
  children,
  onBtnClick,
  bgColor = "white",
  color = "black",
  width = 300,
  height = 50,
}) => {
  return (
    <Btn
      bgColor={bgColor}
      color={color}
      width={width}
      height={height}
      onClick={onBtnClick}
    >
      {children}
    </Btn>
  );
};
export default Button;
