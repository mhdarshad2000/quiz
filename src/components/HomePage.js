import { Box, Button, Typography } from "@mui/material";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "#3f51b5",
      }}
    >
      <img className="image" src="../../image/mern_hero.png" />
      <Typography
        sx={{
          color: "white",
          fontWeight: "500",
          fontSize: { xs: "50px", lg: "96px" },
          fontFamily: "'Merriweather Sans', sans-serif",
          padding: "10px",
        }}
      >
        Mern Quiz
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "white", color: "black" }}
        onClick={() => navigate("/quiz")}
      >
        Start Quiz
      </Button>
    </Box>
  );
}
