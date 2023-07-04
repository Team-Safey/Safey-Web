import { styled } from "styled-components";
import TextInput from "../../Components/input";
import { useState } from "react";
import { Logo } from "../../assets";
import { LeftArrow } from "../../assets/icon";
import { signUpTextState } from "../../Atom/signUp";
import { useRecoilState } from "recoil";

export default function SignUp() {
  const [state, setState] = useRecoilState(signUpTextState);

  return (
    <>
      <GoBack>
        <BackBtn>
          <img src={LeftArrow} />
        </BackBtn>
      </GoBack>
      <Title>
        <LogoImg src={Logo} />
        <Text>Sign Up</Text>
      </Title>
      <TextFiled>
        <TextInput
          placeholder="아이디를 입력해 주세요"
          value={state.id}
          onChange={(e) => {
            setState({
              ...state,
              id: e.target.value,
            });
          }}
        />
        <TextInput
          placeholder="이메일을 입력해 주세요"
          value={state.password}
          onChange={(e) =>
            setState({
              ...state,
              email: e.target.value,
            })
          }
        />
      </TextFiled>
    </>
  );
}

const GoBack = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;
const BackBtn = styled.button`
  width: 26px;
  height: 26px;
  padding: 0;
  background: none;
  border: none;
`;

const Title = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  gap: 3px;
  margin-top: 10px;
`;
const LogoImg = styled.img`
  width: 30px;
  height: 30px;
`;
const Text = styled.p`
  font-size: 24px;
  font-weight: 900;
  color: #3e4241;
`;
const TextFiled = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
const GoToSignUp = styled.p`
  font-size: 12px;
`;
