import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const [percent, setPercent] = useState(null);
  const navigate = useNavigate("");
  useEffect(() => {
    const mark = localStorage.getItem("mark");
    const count = localStorage.getItem("count");
    setPercent(Math.round((mark / count) * 100));
  }, []);
  return (
    <Box sx={{ background: "#3f51b5", width: "100vw", height: "100vh" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "3",
            borderRadius: "10px",
            flexDirection: "column",
            paddingBottom: "75px",
            background: "white",
          }}
        >
          <img className="successGif" src="../../image/award.gif" />
          <img className="successImg" src="../../image/3644000.png" />
          <Typography
            sx={{
              fontSize: { md: "35px", xs: "28px" },
              fontWeight: { md: "600", xs: "600" },
              paddingY: "20px",
            }}
          >
            {percent > 75 ? "Congratulations" : "Better Luck Next time"}
          </Typography>
          <Box sx={{ fontSize: "22px", fontWeight: "400" }}>
            {percent}% Of your answers are correct. Keep improving your
            knowledge
          </Box>
          <Button
            variant="contained"
            sx={{ marginTop: "30px" }}
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Reset The Quiz
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
