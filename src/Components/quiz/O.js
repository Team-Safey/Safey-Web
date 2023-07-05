import styled, { css } from "styled-components";

export default function Oanswer({ disabled, onClick, isSelect, isCorrect }) {
  return (
    <OAnswer
      isCorrect={isCorrect}
      isSelect={isSelect}
      isDisabled={disabled}
      disabled={disabled}
      onClick={() => {
        isCorrect === "" && onClick();
      }}
    >
      O
    </OAnswer>
  );
}

const OAnswer = styled.button`
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
  ${(props) => {
    if (props.isCorrect === "") {
      return props.isSelect
        ? css`
            border: 2px solid #4863c5;
          `
        : css`
            border: solid 1px #e1e1e1;
          `;
    } else if (props.isCorrect === true && props.isSelect) {
      return css`
        border: 2px solid #68cd72;
      `;
    } else if (props.isCorrect === false && props.isSelect === true) {
      return css`
        border: 2px solid #e54949;
      `;
    } else if (props.isCorrect === false && props.isSelect === false) {
      return css`
        border: 2px solid #68cd72;
      `;
    }
  }}
`;
