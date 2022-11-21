import React from "react";

const QuizOption = ({ option, idx, handleAnswer }) => {
  return (
    <div>
      <div onClick={() => handleAnswer(option)}>
        <input type="radio" name="opt" id={idx} />
        <label className="ml-2" htmlFor={idx}>
          {option}
        </label>
      </div>
    </div>
  );
};

export default QuizOption;
