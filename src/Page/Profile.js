import styled from "styled-components";
import { getUser } from "../apis/user";
import { useState, useEffect } from "react";
import { LeftArrow, RightArrow } from "../assets/icon";
import { useNavigate } from "react-router-dom";
import { logout, delete_user } from "../apis/user";

export default function Profile() {
  const navi = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    score: 0,
  });
  async function userName() {
    const result = await getUser();
    setUser({
      name: result.name,
      email: result.email,
      score: result.score,
    });
  }

  useEffect(() => {
    userName();
  }, []);

  return (
    <>
      <Mymy>
        <Header>
          <GoBack
            onClick={() => {
              navi(-1);
            }}
          >
            <img src={LeftArrow} />
          </GoBack>
        </Header>
        <Mypage>마이페이지</Mypage>
        <My>
          <p className="nm">{user.name}</p>
          <p className="em">{user.email}</p>
          <Scores className="score">
            <p>나의 총점수는</p>
            <p>{user.score}점</p>
          </Scores>
        </My>
        <MyProblem
          onClick={() => {
            window.location.replace("/profile/myQuiz");
          }}
        >
          내가 푼 문제 보기
          <img src={RightArrow} />
        </MyProblem>
        <LogOut onClick={() => logout()}>
          로그아웃
          <img src={RightArrow} />
        </LogOut>
        <Withdrawal onClick={() => delete_user()}>
          회원탈퇴
          <img src={RightArrow} />
        </Withdrawal>
      </Mymy>
    </>
  );
}
const Scores = styled.div`
  flex: 1;
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 8px;
  p:nth-child(2) {
    font-size: 24px;
    font-weight: bold;
    line-height: 24px;
    color: #4863c5;
  }
  p:nth-child(1) {
    font-size: 12px;
    font-weight: bold;
  }
`;
const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Mymy = styled.div``;
const Mypage = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #333333;
`;
const My = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 120px;
  box-shadow: 0px 0px 15px 0px rgba(105, 105, 105, 0.12);
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;

  .nm {
    font-weight: bold;
  }
  .em {
    font-size: 11px;
  }
`;
const MyProblem = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 60px;
  box-shadow: 0px 0px 15px 0px rgba(105, 105, 105, 0.12);
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 13px;
  font-size: 15px;
`;
const LogOut = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 60px;
  box-shadow: 0px 0px 15px 0px rgba(105, 105, 105, 0.12);
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 13px;
  font-size: 15px;
`;
const Withdrawal = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 60px;
  box-shadow: 0px 0px 15px 0px rgba(105, 105, 105, 0.12);
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 13px;
  font-size: 15px;
`;
const GoBack = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  padding: 0;
  background: none;
  border: none;
  img {
    width: 20px;
  }
`;
