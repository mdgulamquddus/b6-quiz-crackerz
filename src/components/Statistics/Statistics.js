import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CoursesContext } from "../Layout/Root";

const Statistics = () => {
  const data = useContext(CoursesContext);
  return (
    <ResponsiveContainer>
      <div className="md:container md:mx-auto grid justify-center mt-10">
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="total" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
    </ResponsiveContainer>
  );
};

export default Statistics;
