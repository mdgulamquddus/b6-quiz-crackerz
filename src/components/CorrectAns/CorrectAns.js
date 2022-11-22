import React from "react";

const CorrectAns = ({ open, correctAnswer }) => {
  if (!open) return null;
  return (
    <div>
      <h2 className="font-bold mt-3">Correct Answer : {correctAnswer}</h2>
    </div>
  );
};

export default CorrectAns;
