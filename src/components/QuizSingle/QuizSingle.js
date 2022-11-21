import React from "react";
import QuizOption from "../QuizOption/QuizOption";

const QuizSingle = ({ quiz }) => {
  const { question, options } = quiz;
  return (
    <div>
      <h2>{question}</h2>
      {options.map((option, idx) => (
        <QuizOption key={idx} option={option} />
      ))}
    </div>
  );
};

export default QuizSingle;
