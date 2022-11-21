import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizSingle from "../QuizSingle/QuizSingle";

const Quiz = () => {
  const { questions } = useLoaderData();
  console.log(questions);
  return (
    <div className="w-3/4 mx-auto my-10">
      {questions.map((quiz) => (
        <QuizSingle key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
};

export default Quiz;
