import PickBtn from "../Components/PickBtn";
import Btn from "../Components/AnsBtn";
import styled from "styled-components";
import Problem from "../Components/Problem";
import Help from "../Components/Help";
export default function Home() {
  return (
    <Hom>
      <Help text="문제를 읽고 4개의 답 중 하나를 선택해주세요." />
      <Problem />
      <PickBtn
        disabled={false}
        text="화장실에 가서 숨는다."
        onClick={() => {
          console.log("해");
        }}
      />
      <Btn
        disabled={true}
        text="정답 확인"
        onClick={() => {
          console.log("해");
        }}
      />
    </Hom>
  );
}
const Hom = styled.div`
  display: flex;
  flex-direction: column;
`;
