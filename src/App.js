import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Ranking from "./Page/Ranking";
import Home from "./Page/Home";
import Profile from "./Page/Profile";
import Quiz from "./Page/Quiz";


function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            /*<PickBtn
              disabled={false}
              text="정답 확인"
              onClick={() => {
                console.log("해");
              }}
            />*/
             <Home />        
          }
        />
        <Route path="/ranking" Component={Ranking} />
        <Route path="/quiz/:category" element={<Quiz />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
