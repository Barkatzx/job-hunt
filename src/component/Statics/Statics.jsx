import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

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
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          labelLine={false}
          label={({ name, value }) => `${name}: ${value}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend align="center" verticalAlign="bottom" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Statics;
