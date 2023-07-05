import styled, { css } from "styled-components";

export default function Choice({ data, select, setSelect }) {
  const { choice_one, choice_two, choice_three, choice_four } = data;
  const choices = [choice_one, choice_two, choice_three, choice_four];
  return (
    <Div>
      {choices.map((item, index) => (
        <Seontaegji
          isSelected={select.userAnswer === index + 1 + ""}
          onClick={() => {
            setSelect({
              ...select,
              userAnswer: index + 1 + "",
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
  ${(props) =>
    props.isSelected === true
      ? css`
          border: solid 2px #4863c5;
        `
      : css`
          border: solid 1px #e1e1e1;
        `}
`;
