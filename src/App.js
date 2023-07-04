import React from "react";
import { Route, Routes } from "react-router-dom";
import Ranking from "./Ranking";
import Home from "./Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/ranking" Component={Ranking} />
      </Routes>
    </div>
  );
}

export default App;
