import React from "react";
import { NavLink, Routes, Route } from "react-router";
import Home from "./Home";
import Api from "./Api";
import Notfound from "./Notfound";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Api />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
