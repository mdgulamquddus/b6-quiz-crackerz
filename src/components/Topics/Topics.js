import React, { useContext } from "react";
import CourseSingle from "../CourseSingle/CourseSingle";
import { CoursesContext } from "../Layout/Root";

const Topics = () => {
  const courses = useContext(CoursesContext);
  return (
    <div className="container md:mx-auto my-10 grid md:grid-cols-2 gap-10 mx-3">
      {courses.map((course) => (
        <CourseSingle key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Topics;
