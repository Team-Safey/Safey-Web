import { styled } from "styled-components";
import TextInput from "../../Component/input";
import { useState } from "react";
import { Logo } from "../../assets";
import { Link } from "react-router-dom";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <>
      <Title>
        <LogoImg src={Logo} />
        <Text>Login</Text>
      </Title>
      <TextFiled>
        <TextInput
          placeholder="아이디를 입력해 주세요"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <TextInput
          placeholder="비밀번호를 입력해 주세요"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <GoToSignUp>
          아직 회원이 아니신가요?<Link to="/signUp">회원가입하기</Link>
        </GoToSignUp>
      </TextFiled>
    </>
  );
}

const Title = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  gap: 3px;
  margin-top: 60px;
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
