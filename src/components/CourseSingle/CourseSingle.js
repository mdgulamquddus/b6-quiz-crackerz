import React from "react";
import { Link } from "react-router-dom";

const CourseSingle = ({ course }) => {
  const { id, logo, name, total } = course;
  return (
    <div className="bg-gray-200 flex justify-around items-center w-full shadow-lg border border-gray-100 rounded-md ">
      <div className="w-">
        <img className="w-full h-80" src={logo} alt="" />
      </div>
      <div className="leading-10 text-xl font-semibold">
        <h2>{name}</h2>
        <p className="my-5">Total Quiz : {total}</p>
        <Link to={`/courses/${id}`}>
          <button className="bg-cyan-600 px-4 rounded-md text-white">
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseSingle;
