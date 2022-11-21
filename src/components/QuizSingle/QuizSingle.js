import React from "react";
import ReactTooltip from "react-tooltip";
import { AiFillEye } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QuizOption from "../QuizOption/QuizOption";

const QuizSingle = ({ quiz, idx }) => {
  const { question, options, correctAnswer } = quiz;

  const handleAnswer = (quizOpt) => {
    if (quizOpt === correctAnswer) {
      alert("Answer is Correct");
      toast.success("Answer Correct", { autoClose: 500 });
    } else {
      alert("Answer is Wrong");
      toast.error("Wrong Answer", { autoClose: 500 });
    }
  };
  const answer = () => {
    alert(correctAnswer);
    toast.success(correctAnswer, { autoClose: 500 });
  };
  return (
    <div className="gird  gap-4 mb-4 p-5 border border-gray-100 shadow-md justify-center">
      <div className="flex">
        <h2 className="mb-4 text-xl text-center mr-3">
          Quiz {`${idx + 1}`} :{question}
        </h2>
        <ReactTooltip />
        <button
          onClick={() => answer()}
          data-tip="Correct Answer"
          className="cursor-pointer"
        >
          <AiFillEye />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {options.map((option, idx) => (
          <QuizOption
            key={idx}
            option={option}
            idx={idx}
            handleAnswer={handleAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizSingle;
