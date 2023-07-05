import styled from "styled-components";
import TextInput from "../input";

export default function StringQuiz({ data, state, setState, isCorrect }) {
  return (
    <Wrapper>
      <TextInput
        isSuccess={isCorrect === true && true}
        isError={isCorrect === false && true}
        placeholder="정답을 입력해주세요"
        value={state.user_answer}
        onChange={(e) => {
          setState({
            ...state,
            user_answer: e.target.value,
          });
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 0 15px 0;
`;
