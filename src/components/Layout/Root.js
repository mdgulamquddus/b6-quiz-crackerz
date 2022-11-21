import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";

export const CoursesContext = createContext([]);

const Root = () => {
  const courses = useLoaderData();
  return (
    <CoursesContext.Provider value={courses}>
      <Header />
      <Outlet />
    </CoursesContext.Provider>
  );
};

export default Root;
