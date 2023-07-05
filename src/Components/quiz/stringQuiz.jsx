import styled from "styled-components";
import TextInput from "../input";

export default function StringQuiz({ data, state, setState }) {
  return (
    <Wrapper>
      <TextInput
        placeholder="정답을 입력해주세요"
        value={state.userAnswer}
        onChange={(e) => {
          setState({
            ...state,
            userAnswer: e.target.value,
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
