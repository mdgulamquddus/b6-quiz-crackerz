import React, { useContext } from "react";
import { CoursesContext } from "../Layout/Root";

const Topics = () => {
  const courses = useContext(CoursesContext);
  return (
    <div>
      <h2>This is Topics Component{courses.length}</h2>
    </div>
  );
};

export default Topics;
