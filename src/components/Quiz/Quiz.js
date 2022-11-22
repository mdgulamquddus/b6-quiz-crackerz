import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import QuizSingle from "../QuizSingle/QuizSingle";

const Quiz = () => {
  const { questions } = useLoaderData();
  const id = useParams();
  return (
    <div className="md:w-2/4 w-full mx-auto my-10 grid gap-4">
      <h2 className="text-center text-2xl font-bold">
        Quiz Of {id.courseName}
      </h2>
      {questions.map((quiz, idx) => (
        <QuizSingle key={quiz.id} quiz={quiz} idx={idx} />
      ))}
    </div>
  );
};

export default Quiz;
