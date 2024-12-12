import React, { useState } from 'react';
import './Quiz.css';

const DynamicQuiz = () => {
  const questionTree = {
    start: {
      question: 'What area are you interested in?',
      options: [
        { text: 'Frontend Development', next: 'frontend' },
        { text: 'Backend Development', next: 'backend' },
        { text: 'Data Science', next: 'data' },
        { text: 'UI/UX Design', next: 'design' },
      ],
    },
    frontend: {
      question: 'Which frontend framework do you prefer?',
      options: [
        { text: 'React', next: 'time_commitment' },
        { text: 'Vue', next: 'time_commitment' },
        { text: 'Angular', next: 'time_commitment' },
      ],
    },
    backend: {
      question: 'Which backend language do you prefer?',
      options: [
        { text: 'NodeJS', next: 'time_commitment' },
        { text: 'Python', next: 'time_commitment' },
        { text: 'Java', next: 'time_commitment' },
      ],
    },
    data: {
      question: 'What aspect of Data Science excites you?',
      options: [
        { text: 'Machine Learning', next: 'time_commitment' },
        { text: 'Data Visualization', next: 'time_commitment' },
        { text: 'AI Systems', next: 'time_commitment' },
      ],
    },
    design: {
      question: 'Which design tool are you familiar with?',
      options: [
        { text: 'Figma', next: 'time_commitment' },
        { text: 'Adobe XD', next: 'time_commitment' },
        { text: 'Sketch', next: 'time_commitment' },
      ],
    },
    time_commitment: {
      question: 'How much time can you dedicate per week?',
      options: [
        { text: '1-5 hours', next: 'goal' },
        { text: '6-10 hours', next: 'goal' },
        { text: '11-15 hours', next: 'goal' },
        { text: '16+ hours', next: 'goal' },
      ],
    },
    goal: {
      question: 'What is your goal for joining this platform?',
      options: [
        { text: 'Learn new skills', next: null },
        { text: 'Build portfolio', next: null },
        { text: 'Networking', next: null },
        { text: 'Collaborate on real projects', next: null },
      ],
    },
  };

  const [currentNode, setCurrentNode] = useState('start');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);

  const questionPath = [];
  const populatePath = (node) => {
    if (!node) return;
    questionPath.push(node);
    const nextNode = questionTree[node].options[0]?.next;
    populatePath(nextNode);
  };

  populatePath('start');
  const totalQuestions = questionPath.length;

  const handleNext = () => {
    if (selectedAnswer !== null) {
      setAnswers((prev) => [...prev, selectedAnswer]);
      const nextNode = questionTree[currentNode].options.find(
        (opt) => opt.text === selectedAnswer
      )?.next;

      if (nextNode) {
        setCurrentNode(nextNode);
        setSelectedAnswer(null);
      } else {
        alert('Quiz Complete! Check your recommendations.');
        console.log('User Answers:', answers);
      }
    }
  };

  const progress = ((answers.length + 1) / totalQuestions) * 100;

  return (
    <div className="quiz-container">
      <h1>Preliminary Quiz</h1>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="question-box">
        <h3>QUESTION:</h3>
        <p className="question-text">{questionTree[currentNode].question}</p>
      </div>
      <div className="options-container">
        {questionTree[currentNode].options.map((option, index) => (
          <label key={index} className="option-label">
            <input
              type="radio"
              name="quiz-option"
              value={option.text}
              onChange={() => setSelectedAnswer(option.text)}
              className="option-input"
            />
            {option.text}
          </label>
        ))}
      </div>
      <button onClick={handleNext} disabled={selectedAnswer === null} className="next-button">
        NEXT
      </button>
    </div>
  );
};

export default DynamicQuiz;
