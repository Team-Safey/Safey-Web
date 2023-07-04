import React from "react";
import { Route, Routes } from "react-router-dom";
import Ranking from "./Ranking";
import Home from "./Home";


function App() {
  return (
    <div>
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
      </Routes>
    </div>
  );
}

export default App;
