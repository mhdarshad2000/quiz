import { Box, Container, Divider, Typography } from "@mui/material";

export default function Success() {
  const mark = localStorage.getItem("mark");
  const count = localStorage.getItem("count");
  const percent = (mark / count) * 100;
  return (
    <Container>
      <Box sx={{ padding: "30px", fontSize: "35px", fontWeight: "500" }}>
        Mern Stack Quiz
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50%",
          boxShadow: "3",
          borderRadius: "7px",
          flexDirection: "column",
          padding: "25px",
          marginTop: "25px",
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "35px", xs: "28px" },
            fontWeight: { md: "600", xs: "600" },
            paddingBottom: "10px",
          }}
        >
          {percent > 75 ? "congratulations" : "Better Luck Next time"}
        </Typography>
        <Box sx={{ fontSize: "22px", fontWeight: "400", paddingTop: "35px" }}>
          {percent} Of your answers are correct. Keep improving your knowledge
        </Box>
      </Box>
      <Box>
        <Typography></Typography>
      </Box>
    </Container>
  );
}
