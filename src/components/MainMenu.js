import { Box } from "@mui/joy";
import Typed from "typed.js";
import React from "react";
import "./MainMenu.css";

const MainMenu = () => {
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
      typed.destroy();
    };
  }, []);

  return (
    <>
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
        <h1 className="description">
          Who work together to create useful <br /> and interesting software.
        </h1>
        <img src="nerdsvg.svg" className="nerdSvg" />
      </Box>
    </>
  );
}

export default MainMenu;
