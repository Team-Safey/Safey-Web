import { atom } from "recoil";

export const myQuizData = atom({
  key: "myQuizData",
  default: {
    quizId: 0,
    title: "",
    description: "",
    choiceOne: "",
    choiceTwo: "",
    choiceThree: "",
    choiceFour: "",
    answer: "",
    choiceAnswer: 0,
    score: 0,
    category: "",
    quizType: "",
    isCorrect: false,
  },
});
