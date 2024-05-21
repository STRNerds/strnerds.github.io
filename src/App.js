import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import MainMenu from "./components/MainMenu";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
