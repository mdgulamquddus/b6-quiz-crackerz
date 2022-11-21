import React from "react";

const CourseSingle = ({ course }) => {
  const { logo, name, total } = course;
  return (
    <div className="bg-gray-200 flex justify-around items-center w-full shadow-lg border border-gray-100 rounded-md ">
      <div className="w-">
        <img className="w-full h-80" src={logo} alt="" />
      </div>
      <div className="leading-10 text-xl font-semibold">
        <h2>{name}</h2>
        <p className="my-5">Total Quiz : {total}</p>
        <button>Start Quiz</button>
      </div>
    </div>
  );
};

export default CourseSingle;
