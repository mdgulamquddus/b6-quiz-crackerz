import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="translate-y-80 text-center">
      <h1 className=" text-6xl  ">Page Not Found 404</h1>
      <Link className="mt-10 inline-block text-2xl" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default Page404;
