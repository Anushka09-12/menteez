import React, { useState } from "react";
import "./Formstress.css";
import {Nav} from "./Components/Home.jsx"
import "./Components/Blog.css"
import anxiety from "./images/anxiety.jpeg"

function Formstress() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "How often do you experience dryness of the mouth?",
      options: [
        { id: 0, text: "Normal", isCorrect: "Normal" },
        { id: 1, text: "Mild", isCorrect: "Mild" },
        { id: 2, text: "Moderate", isCorrect: "Moderate" },
        { id: 3, text: "Severe", isCorrect: "Severe" },
      ],
    },
    {
      text: "How long have you been experiencing difficulty in breathing?",
      options: [
        { id: 0, text: "Normal", isCorrect: "Normal" },
        { id: 1, text: "Mild", isCorrect: "Mild" },
        { id: 2, text: "Moderate", isCorrect: "Moderate" },
        { id: 3, text: "Severe", isCorrect: "Severe" },
      ],
    },
    {
      text: "How often do you experience trembling or shaking?",
      options: [
        { id: 0, text: "Normal", isCorrect: "Normal" },
        { id: 1, text: "Mild", isCorrect: "Mild" },
        { id: 2, text: "Moderate", isCorrect: "Moderate" },
        { id: 3, text: "Severe", isCorrect: "Severe" },
      ],
    },
    {
      text: "How often do you experience feelings of being close to panic?",
      options: [
        { id: 0, text: "Normal", isCorrect: "Normal" },
        { id: 1, text: "Mild", isCorrect: "Mild" },
        { id: 2, text: "Moderate", isCorrect: "Moderate" },
        { id: 3, text: "Severe", isCorrect: "Severe" },
      ],
    },
    {
      text: "How often do you become aware of the action of your heart when you are not engaging in physical activity?",
      options: [
        { id: 0, text: "Normal", isCorrect: "Normal" },
        { id: 1, text: "Mild", isCorrect: "Mild" },
        { id: 2, text: "Moderate", isCorrect: "Moderate" },
        { id: 3, text: "Severe", isCorrect: "Severe" },
      ],
    },
    {
      text: "How often do you experience feelings of fear or anxiety without any clear trigger or cause?",
      options: [
        { id: 0, text: "Normal", isCorrect: "Normal" },
        { id: 1, text: "Mild", isCorrect: "Mild" },
        { id: 2, text: "Moderate", isCorrect: "Moderate" },
        { id: 3, text: "Severe", isCorrect: "Severe" },
      ],
    },
    {
      text: "Have you experienced panic attacks or anxiety in the past?",
      options: [
        { id: 0, text: "Normal", isCorrect: "Normal" },
        { id: 1, text: "Mild", isCorrect: "Mild" },
        { id: 2, text: "Moderate", isCorrect: "Moderate" },
        { id: 3, text: "Severe", isCorrect: "Severe" },
      ],
    },
   
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect ==="Normal") {
      setScore(score + 0);
    }else if (isCorrect ==="Mild") {
      setScore(score + 1);
    }else if (isCorrect ==="Moderate") {
      setScore(score + 2);
    }else if(isCorrect ==="Severe") {
      setScore(score + 3);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="Appli">
      <Nav></Nav>
      {/* 1. Header  */}
      

      
      

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          
          <h2>Score: {score}</h2>
          <p>Your recommended activities are:</p>
          <div className="blocks">
        <div className="boxes">
            <center>
            <img src={anxiety} alt ="image" height={200} width={250}/>
            </center>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry <a href="/">Read More</a>
          </p>
        </div>
        <div className="boxes">
            <center>
            <img src={anxiety} alt ="image" height={200} width={250}/>
            </center>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry <a href="/">Read More</a>
          </p>
        </div>
        <div className="boxes">
            <center>
            <img src={anxiety} alt ="image" height={200} width={250}/>
            </center>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry <a href="/">Read More</a>
          </p>
        </div>
      </div>
        </div>
      ) : (
        /* 5. Question Card  */
        <div>
        <div className="headtext">
        <h1>Please Take the FAQ</h1>
        <br></br>
        <br></br>
        <br></br>
        </div>
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <center>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
          </center>
        </div>
        </div>
      )}
    </div>
  );
}

export default Formstress;
