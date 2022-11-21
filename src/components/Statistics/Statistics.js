import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CoursesContext } from "../Layout/Root";

// const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

const Statistics = () => {
  const data = useContext(CoursesContext);
  return (
    <div className="container mx-auto grid justify-center mt-10">
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="total" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
};

export default Statistics;
