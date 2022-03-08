import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { Home, Detail } from "./pages/index";

import Logo from "./assets/logo.png";

const App = () => {
  return (
    <div className="App">
      <Link to="/" style={{ textAlign: "center" }}>
        <img src={Logo} style={{ width: "300px" }} />
      </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
