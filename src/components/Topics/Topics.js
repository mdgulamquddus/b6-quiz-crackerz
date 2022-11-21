import React, { useContext } from "react";
import CourseSingle from "../CourseSingle/CourseSingle";
import { CoursesContext } from "../Layout/Root";

const Topics = () => {
  const courses = useContext(CoursesContext);
  console.log(courses);
  return (
    <div className="container mx-auto my-10 grid grid-cols-2 gap-10 ">
      {courses.map((course) => (
        <CourseSingle key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Topics;
