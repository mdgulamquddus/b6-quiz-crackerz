import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto text-center my-10">
      <div className="mb-5">
        <h2 className="text-5xl font-extrabold">Welcome To Quiz Web Mania</h2>
        <p className="text-xl">
          Here is different type of quiz related to web development
        </p>
      </div>
      <img
        className="w-3/4 mx-auto"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyoEj7P7BRWGP8HqwOHschq-wwze7E2q9xHw&usqp=CAU"
        alt=""
      />
    </div>
  );
};

export default Home;
