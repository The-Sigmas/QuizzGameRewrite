import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Quiz(props) {
  const questions = [
    {
      id: 1,
      question: props.q1,
      options: [props.o11, props.o12, props.o13],
      answer: props.a1,
    },
    {
      id: 2,
      question: props.q2,
      options: [props.o21, props.o22, props.o23],
      answer: props.a2,
    },
    {
      id: 3,
      question: props.q3,
      options: [props.o31, props.o32, props.o33],
      answer: props.a3,
    },
  ];

  // Shuffle questions to randomize order
  const shuffleQuestions = (questions) => {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [shuffledQuestions, setShuffledQuestions] = useState(shuffleQuestions(questions));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');
  
  // Handle option click
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === shuffledQuestions[currentQuestionIndex].answer) {
      setFeedback('');
    } else {
      setFeedback('Falsch');
    }
  };

  // Handle next button click
  const handleNextClick = () => {
    if (selectedOption === shuffledQuestions[currentQuestionIndex].answer) {
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setFeedback('');
      } else {
        // Reload page when all questions are answered
        window.location.reload();
      }
    } else {
      setFeedback('Falsch');
    }
  };

  return (
    <div className="quiz-container">
      <h2>{shuffledQuestions[currentQuestionIndex].question}</h2>
      <div className="options">
        {shuffledQuestions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={selectedOption === option ? 'selected' : ''}
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && <p>{feedback}</p>}
      <button onClick={handleNextClick} disabled={!selectedOption}>
        Weiter
      </button>
    </div>
  );
}
