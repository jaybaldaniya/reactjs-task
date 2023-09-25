import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizQuestions } from "./constant";
import "./styles/quiz.css";

const Quiz = () => {
  const navigate = useNavigate();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [timeLeft, setTimeLeft] = useState(quizQuestions.totalTime);
  const { questions } = quizQuestions;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  useEffect(() => {
    if (activeQuestion < questions.length) {
      setTimeLeft(quizQuestions.totalTime);
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [activeQuestion, questions]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleClickNext();
    }
  }, [timeLeft]);

  const handleClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 10,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      navigate("/thankyou", { state: { questions, result } });
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="quiz-container">
      <div>
        <span className="active-question-no">
          {addLeadingZero(activeQuestion + 1)}
        </span>
        <span className="total-question">
          /{addLeadingZero(questions.length)}
        </span>
      </div>
      <h2>{question}</h2>
      <p>Time left: {timeLeft} seconds</p>
      <ul>
        {choices.map((answer, index) => (
          <li
            onClick={() => onAnswerSelected(answer, index)}
            key={answer}
            className={selectedAnswerIndex === index ? "selected-answer" : null}
          >
            {answer}
          </li>
        ))}
      </ul>
      <div className="flex-right">
        <button
          onClick={handleClickNext}
          disabled={selectedAnswerIndex === null}
        >
          {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
