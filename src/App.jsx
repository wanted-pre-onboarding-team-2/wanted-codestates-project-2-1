import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Issues from "./pages/Issues";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/issues/:repoInfo" element={<Issues />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
