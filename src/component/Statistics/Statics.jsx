import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Assignment 1', value: 57 },
  { name: 'Assignment 2', value: 53 },
  { name: 'Assignment 3', value: 56 },
  { name: 'Assignment 4', value: 60 },
  { name: 'Assignment 5', value: 60 },
  { name: 'Assignment 6', value: 60 },
  { name: 'Assignment 7', value: 55 },
  { name: 'Assignment 8', value: 60 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#a2d7dd', '#ffc658'];

const Statics = () => {
  return (
    <div className="container mx-auto flex justify-center">
  <PieChart className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl" width={400} height={400}>
    <Pie dataKey="value" isAnimationActive={true} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
    <Tooltip />
  </PieChart>
</div>

  );
};

export default Statics;
