import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../questions/Question.json";

export default function Quiz() {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [timer, setTimer] = useState(60);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [current, setCurrent] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [mark, setMark] = useState(0);
  const [time, setTime] = useState("");
  useEffect(() => {
    setCurrentQuestion(Question.filter((quest) => quest.number === count));
  }, [count, clicked]);

  useEffect(() => {
    const cur = localStorage.getItem("count");
    const mark = localStorage.getItem("mark");
    setMark(Number(mark));
    if (cur >= Question.length - 1) {
      navigate("/result");
    } else {
      setCount(Number(cur) + 1);
    }
  }, []);
  useEffect(() => {
    timer > 0 && setTime(setTimeout(() => setTimer(timer - 1), 1000));
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      localStorage.setItem("count", JSON.stringify(count));
      nextHandle();
    }
  }, [timer]);

  const clickFunction = (option) => {
    localStorage.setItem("count", JSON.stringify(count));
    setClicked(true);
    if (option.true === false) {
      setCurrent(option);
      setMark((prev) => prev);
    } else {
      setMark((prev) => prev + 1);
    }
  };
  const nextHandle = () => {
    clearTimeout(time);
    setTimer(60);
    localStorage.setItem("mark", JSON.stringify(mark));
    setClicked(false);
    if (count < Question.length - 1) {
      setCount((prev) => prev + 1);
    } else {
      navigate("/result");
    }
  };
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          paddingTop: "20px",
        }}
      >
        <Box>
          <Typography variant="h3" component="span" sx={{ color: "gray" }}>
            {currentQuestion[0]?.number}/
          </Typography>
          <Typography variant="h3" component="span">
            {Question.length - 1}
          </Typography>
        </Box>
        <Typography>00:{timer} s</Typography>
      </Box>
      <Box
        sx={{
          padding: "30px",
          fontSize: { lg: "35px", xs: "20px", sm: "28px" },
        }}
      >
        {currentQuestion[0]?.question}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {currentQuestion[0]?.answers.map((option) => (
          <button
            className="options"
            style={{
              border:
                clicked && option.true
                  ? "1px solid green"
                  : option === current
                  ? "1px solid red"
                  : "1px solid lightblue",
              color:
                clicked && option.true
                  ? "green"
                  : option === current
                  ? "red"
                  : "black",
            }}
            onClick={() => clickFunction(option)}
            disabled={clicked}
          >
            {option.option}
          </button>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          padding: { lg: "55px 117px", md: "40px 90px", xs: "20px 50px" },
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={nextHandle}
          disabled={!clicked}
          sx={{ display: !clicked && "none" }}
        >
          Next Question
        </Button>
      </Box>
    </Container>
  );
}
