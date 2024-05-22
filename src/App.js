import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import MainMenu from "./components/MainMenu";
import Navbar from "./components/Navbar";
import AboutUsPage from "./components/AboutUsPage";

const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
