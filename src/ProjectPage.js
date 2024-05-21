import { Box } from "@mui/joy";
import React from "react";

function ProjectPage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className="navbar"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "95%",
            padding: "0vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <h3 className="homeButton" sx={{ marginBottom: "0" }}>
              <a href="/">STRNerds</a>
            </h3>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "8vh",
              mr: "2vh",
            }}
          >
            <h3 className="projectsButton" sx={{ marginBottom: "0" }}>
              <a href="/projects">Projects</a>
            </h3>
            <h3 className="aboutUsButton" sx={{ marginBottom: "0" }}>
              <a href="/about">About Us</a>
            </h3>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          justifyItems: "center",
        }}
        className="homeTextContainer"
      >
        <h1 className="project">Project Title</h1>
        <p className="project">Project description...</p>
      </Box>
    </>
  );
}

export default ProjectPage;
