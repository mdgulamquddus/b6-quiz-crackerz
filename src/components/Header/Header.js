import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-lime-100">
      <div className="container mx-auto flex justify-between py-4">
        <div>
          <NavLink className="text-3xl font-bold text-cyan-600" to="/">
            QUIZ WEB MANIA
          </NavLink>
        </div>
        <div className="flex gap-2 text-xl font-bold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/topics">Topics</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
