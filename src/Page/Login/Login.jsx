import { styled } from "styled-components";
import TextInput from "../../Components/input";
import { useState, useEffect } from "react";
import { Logo } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../../Components/AnsBtn";
import { login } from "../../apis/auth";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [disabledState, setDisabledState] = useState(true);
  const navi = useNavigate();

  useEffect(() => {
    if (state.id !== "" && state.pw !== "") {
      setDisabledState(false);
    } else {
      setDisabledState(true);
    }
  }, [state]);

  return (
    <>
      <Title>
        <LogoImg src={Logo} />
        <Text>Login</Text>
      </Title>
      <TextFiled>
        <TextInput
          placeholder="이메일을 입력해 주세요"
          value={state.email}
          onChange={(e) => {
            setState({
              ...state,
              email: e.target.value,
            });
          }}
        />
        <TextInput
          placeholder="비밀번호를 입력해 주세요"
          isPassword
          value={state.password}
          onChange={(e) =>
            setState({
              ...state,
              password: e.target.value,
            })
          }
        />
        <Btn
          text="로그인"
          disabled={disabledState}
          onClick={async () => {
            await login(state).then((response) => {
              if (response) {
                navi("/");
              }
            });
          }}
        />
        <GoToSignUp>
          아직 회원이 아니신가요?<Link to="/signUp"> 회원가입하기</Link>
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
