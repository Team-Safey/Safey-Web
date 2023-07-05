import styled, { css } from "styled-components";

export default function Saneob({ disabled, onClick, isSelect }) {
  return (
    <Saneobs
      isSelect={isSelect}
      isDisabled={disabled}
      disabled={disabled}
      onClick={onClick}
    >
      산업 안전
    </Saneobs>
  );
}
const Saneobs = styled.button`
  font-weight: bold;
  border: none;
  border-radius: 16px;
  width: 100%;
  height: 32px;
  ${(props) =>
    props.isSelect == true
      ? css`
          background-color: #4863c5;
          color: white;
        `
      : css`
          background-color: #ffffff;
          color: black;
        `}
`;
