import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizSingle from "../QuizSingle/QuizSingle";

const Quiz = () => {
  const { questions } = useLoaderData();
  console.log(questions);
  return (
    <div className="w-2/4 mx-auto my-10 grid gap-4">
      {questions.map((quiz, idx) => (
        <QuizSingle key={quiz.id} quiz={quiz} idx={idx} />
      ))}
    </div>
  );
};

export default Quiz;
