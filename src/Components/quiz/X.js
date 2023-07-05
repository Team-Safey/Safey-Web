import styled, { css } from "styled-components";

export default function Xanswer({ disabled, onClick, isSelect }) {
  return (
    <XAnswer
      isSelect={isSelect}
      isDisabled={disabled}
      disabled={disabled}
      onClick={onClick}
    >
      X
    </XAnswer>
  );
}

const XAnswer = styled.button`
  height: 120px;
  width: 120px;
  font-size: 70px;
  font-weight: bold;
  border-radius: 12px;
  color: black;
  line-height: 50px;
  text-align: center;
  background-color: #f8f8f8;
  border: solid 1px #e1e1e1;

  ${(props) =>
    props.isSelect == true
      ? css`
          border: solid 2px #4863c5;
        `
      : css`
          border: solid 1px #e1e1e1;
        `}
`;
