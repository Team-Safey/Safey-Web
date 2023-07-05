import axios from "axios";

//교통안전
export const traffic = async () => {
  let response;
  await axios
    .get("http://43.202.84.47:8080/quizs/traffic")
    .then((res) => (response = res));
  return response;
};

//주거안전
export const residential = async () => {
  let response;
  await axios
    .get("http://43.202.84.47:8080/quizs/residential")
    .then((res) => (response = res));
  return response;
};

//생활안전
export const life = async () => {
  let response;
  await axios
    .get("http://43.202.84.47:8080/quizs/life")
    .then((res) => (response = res));
  return response;
};

//산업안전
export const industrial = async () => {
  let response;
  await axios
    .get("http://43.202.84.47:8080/quizs/industrial")
    .then((res) => (response = res));
  return response;
};

//전체랜덤
export const all = async () => {
  let response;
  await axios
    .get("http://43.202.84.47:8080/quizs/all")
    .then((res) => (response = res));
  return response;
};

//최근 10문제 점수보기
export const score = async () => {
  let response;
  await axios
    .get("http:/43.202.84.47:8080/quizs/score")
    .then((res) => (response = res));
  return response;
};
