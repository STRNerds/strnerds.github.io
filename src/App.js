import { Box } from "@mui/joy";
import "./App.css";

function App() {
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
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '95%',
          padding: 0.1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start', // Align items to the start
            alignItems: 'center',
          }}
        >
          <img src="nerd.png" className="nerdNavbar" />
          <h3 className="homeButton" sx={{ marginBottom: '0' }}>STRNerds</h3>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 3,
            mr: 3,
          }}
        >
          <h3 className="projectsButton" sx={{ marginBottom: '0' }}>Projects</h3>
          <h3 className="aboutUsButton" sx={{ marginBottom: '0' }}>About Us</h3>
        </Box>
      </Box>
    </Box>
  );
}

export default App;