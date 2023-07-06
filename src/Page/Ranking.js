import styled, { css } from "styled-components";
import React, { useEffect, useState } from "react";
import { LeftArrow } from "../assets/icon";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { rankingCategory } from "../Atom/rankingAtom";
import UserRank from "../Components/ranking/userBox";
import { weeklyRanking, monthlyRanking, yearlyRanking } from "../apis/user";
import { getUser } from "../apis/user";

const categoryFunction = {
  week: weeklyRanking(),
  month: monthlyRanking(),
  year: yearlyRanking(),
};

export default function Ranking() {
  const navi = useNavigate();
  const [categoryState, setCategoryState] = useRecoilState(rankingCategory);
  const [list, setList] = useState([]);
  const [myProfile, setMyProfile] = useState({}); // 추가된 부분
  const [getProfile, setGetProfile] = useState();

  const getList = async () => {
    const answer = await categoryFunction[categoryState];
    console.log(answer);
    setList(answer.user_scores);
  };

  async function getProfileFunc() {
    const result = await getUser();
    setGetProfile(result);
  }
  useEffect(() => {
    getProfileFunc();
  }, []);

  useEffect(() => {
    getList();
  }, [categoryState]);

  useEffect(() => {
    if (getProfile) {
      const profile = list.find((item) => item.user_id === getProfile.user_id);
      const index = list.findIndex(
        (item) => item.user_id === getProfile.user_id
      );
      if (profile) {
        setMyProfile({ ...profile, rank: index + 1 });
      } else {
        setMyProfile({});
      }
    }
  }, [getProfile]);

  return (
    <>
      <Header>
        <GoBack
          onClick={() => {
            navi("/");
          }}
        >
          <img src={LeftArrow} />
        </GoBack>
      </Header>
      <Myeongye>명예의 전당</Myeongye>
      <Category>
        <CateBtn
          isSelect={categoryState === "week"}
          onClick={() => {
            setCategoryState("week");
          }}
        >
          이번 주
        </CateBtn>
        <CateBtn
          isSelect={categoryState === "month"}
          onClick={() => {
            setCategoryState("month");
          }}
        >
          이번 달
        </CateBtn>
        <CateBtn
          isSelect={categoryState === "year"}
          onClick={() => {
            setCategoryState("year");
          }}
        >
          올해
        </CateBtn>
      </Category>
      <ListComponent>
        <UserRank
          correct_rate={myProfile?.correct_ratio}
          ranke={myProfile?.rank}
          name={myProfile?.name}
          score={myProfile?.total_score}
          isMy
        />
        {list.map((item, index) => (
          <UserRank
            correct_rate={item?.correct_ratio}
            key={index}
            ranke={index + 1}
            name={item?.name}
            score={item?.total_score}
          />
        ))}
      </ListComponent>
    </>
  );
}
const CateBtn = styled.button`
  font-weight: bold;
  border: none;
  border-radius: 14px;
  height: 32px;
  padding: 0 20px;
  ${(props) =>
    props.isSelect
      ? css`
          background-color: #4863c5;
          color: white;
        `
      : css`
          background-color: #ffffff;
          color: black;
        `}
`;
const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Myeongye = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #333333;
`;
const Category = styled.div`
  margin-top: 20px;
  gap: 5px;
  display: flex;
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

const ListComponent = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
