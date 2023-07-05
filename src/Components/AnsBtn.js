import styled, { css } from "styled-components";

export default function Btn({ disabled, text, onClick, isCorrect }) {
  return (
    <Jeongdab
      답={isCorrect}
      isDisabled={!disabled}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Jeongdab>
  );
}
const Jeongdab = styled.button`
  height: 50px;
  width: 100%;
  font-size: 14px;
  border-radius: 12px;
  color: white;
  line-height: 50px;
  text-align: center;
  border: none;
  ${(props) =>
    props.isDisabled == true
      ? css`
          background-color: #4863c5;
        `
      : css`
          background-color: #8e9ed9;
        `}
`;
