import { Box } from "@mui/joy";
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
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
          padding: "0.1vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Link to="/" className="homeButton" sx={{ marginBottom: "0" }}>
            STRNerds
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "7vh",
            mr: "2vh",
          }}
        >
          <Link
            to="/projects"
            className="projectsButton"
            sx={{ marginBottom: "0" }}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="aboutUsButton"
            sx={{ marginBottom: "0" }}
          >
            About Us
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default Navbar;
