import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Venus'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is the largest mammal?',
    options: ['Elephant', 'Blue Whale', 'Giraffe'],
    correctAnswer: 'Blue Whale',
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    setShowAnswer(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  const showCorrectAnswer = () => {
    setShowAnswer(true);
  };

  const finishQuiz = () => {
    setShowAnswer(true);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow">
      {questions[currentQuestion] ? (
        <div>
          <h1 className="text-2xl font-semibold mb-4">{questions[currentQuestion].question}</h1>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`block w-full p-2 rounded ${
                  (showAnswer && option === questions[currentQuestion].correctAnswer) 
                    ? 'bg-green-500 text-white' 
                    : (selectedOption === option) 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100'
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          {!showAnswer && (
            <button
              className={`mt-4 ${
                selectedOption ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
              } text-white px-4 py-2 rounded`}
              onClick={handleNextQuestion}
              disabled={!selectedOption}
            >
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next Question'}
            </button>
          )}
          {selectedOption && !showAnswer && (
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={showCorrectAnswer}
            >
              Show Correct Answer
            </button>
          )}
        </div>
      ) : (
        <div>
          <p className="mt-4 text-center">Your score: {score} out of {questions.length}</p>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={finishQuiz}
          >
            Show All Correct Answers
          </button>
          {showAnswer && (
            <div className="mt-4">
              {questions.map((q, index) => (
                <p
                  key={index}
                  className={`mb-2 ${
                    q.correctAnswer === selectedOption ? 'text-green-500' : 'text-gray-500'
                  }`}
                >
                  Question {index + 1}: {q.question} - Correct Answer: {q.correctAnswer}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
