import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import MainMenu from "./MainMenu";

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
