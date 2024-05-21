import { Box } from "@mui/joy";
import "./App.css";
import Typed from "typed.js";
import React from "react";

function App() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["NERDS", "DEVELOPERS", "STUDENTS"],
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
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
            padding: "0.1vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start", // Align items to the start
              alignItems: "center",
            }}
          >
            {/* <img src="nerd.png" className="nerdNavbar" /> */}
            <h3 className="homeButton" sx={{ marginBottom: "0" }}>
              STRNerds
            </h3>
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
            <h3 className="projectsButton" sx={{ marginBottom: "0" }}>
              Projects
            </h3>
            <h3 className="aboutUsButton" sx={{ marginBottom: "0" }}>
              About Us
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
        <h1 className="weAre">We are</h1>
        <h1 ref={el} className="heroText" style={{ minHeight: "1.2em" }} />{" "}
        {/* Add this line */}
        <h1 className="description">
          Who work together to create useful <br /> and interesting software.
        </h1>
        <img src="nerdsvg.svg" className="nerdSvg" />
      </Box>
    </>
  );
}

export default App;
