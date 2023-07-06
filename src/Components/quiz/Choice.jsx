import styled, { css } from "styled-components";

export default function Choice({ data, select, setSelect, isCorrect }) {
  const { choice_one, choice_two, choice_three, choice_four, choice_answer } =
    data;
  const choices = [choice_one, choice_two, choice_three, choice_four];
  return (
    <Div>
      {choices.map((item, index) => (
        <Seontaegji
          my={index+1}
          choice_answer={choice_answer}
          isCorrect={isCorrect}
          disabled={isCorrect !== ''}
          // desabled={isCorrect===''}
          isSelected={select.user_answer == index + 1}
          onClick={() => {
            setSelect({
              ...select,
              user_answer: index + 1,
            });
          }}
        >
          {item}
        </Seontaegji>
      ))}
    </Div>
  );
}
const Div = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 80px;
  box-sizing: border-box;
  gap: 10px;
`;
const Seontaegji = styled.button`
  height: 50px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  border-radius: 12px;
  color: black;
  line-height: 50px;
  text-align: center;
  background-color: #f8f8f8;
  border: solid 1px #e1e1e1;
  box-shadow: 0px 0px 15px 0px rgba(105, 105, 105, 0.13);
  box-sizing: border-box;
  ${(props) => {
    if (props.isCorrect === "") {
      return (
        props.isSelected &&
        css`
          border: 2px solid #4863c5;
        `
      );
    } else {
      if (props.isCorrect === true && props.isSelected === true) {
        return css`
          border: 2px solid #68cd72;
        `;
      } else if (props.isCorrect === false && props.isSelected === true) {
        return css`
          border: 2px solid #e54949;
        `;
      } else if (
        props.isCorrect === false &&
        props.isSelected === false &&
        props.choice_answer == props.my
      ) {
        return css`
          border: 2px solid #68cd72;
        `;
      }
    }
  }}
`;
