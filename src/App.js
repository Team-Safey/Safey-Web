import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Ranking from "./Page/Ranking";
import Home from "./Page/Home";
import Profile from "./Page/Profile";
import QuizOX from "./Page/QuizOX";
import Login from "./Page/Login/Login";
import SignUp from "./Page/Login/SignUp";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <GlobalStyle />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/ranking" Component={Ranking} />
          <Route path="/quiz/:category" element={<QuizOX />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
