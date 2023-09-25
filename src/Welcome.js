import React from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";
import "./styles/welcome.css";

const Welcome = () => {
  const navigate = useNavigate();
  const getScore = localStorage.getItem("score");
  const getUser = JSON.parse(localStorage.getItem("user"));

  const handleClickNewGame = () => {
    navigate("/quiz");
  };

  return (
    <>
      <div className="header">
        <div className="app-name">Quiz Game</div>
        <div className="user-email">Current Login: {getUser?.email}</div>
        <Logout />
      </div>
      <div className="welcome">
        <h1>Welcome to the Quiz Game</h1>
        <p>
          Total Score: <span>{getScore || 0}</span>
        </p>
        <button onClick={handleClickNewGame}>New Quiz</button>
      </div>
    </>
  );
};

export default Welcome;
