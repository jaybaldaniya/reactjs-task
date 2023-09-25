import React, { useEffect } from "react";
import "./styles/thank-you.css";
import { useLocation, useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { questions, result } = state;

  useEffect(() => {
    localStorage.setItem("score", result.score);
  }, [result]);

  const handleClickPlay = () => {
    navigate("/quiz");
  };

  const handleClickHome = () => {
    navigate("/welcome");
  };

  return (
    <div className="result">
      <h3>Thank You, Your Result</h3>
      <p>
        Total Question: <span>{questions.length}</span>
      </p>
      <p>
        Total Score:<span> {result.score}</span>
      </p>
      <p>
        Correct Answers:<span> {result.correctAnswers}</span>
      </p>
      <p>
        Wrong Answers:<span> {result.wrongAnswers}</span>
      </p>
      <div>
        <button onClick={handleClickPlay}>Play Again</button>
      </div>
      <button className="home" onClick={handleClickHome}>
        Home
      </button>
    </div>
  );
};

export default ThankYou;
