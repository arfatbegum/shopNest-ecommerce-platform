import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Watch', value: 400 },
  { name: 'Necklace', value: 300 },
  { name: 'Trousers', value: 300 },
  { name: 'Tops', value: 200 },
];

const COLORS = ['#2563EB', '#FBBF24', '#82ca9d', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const PieCharts = () => {
    return (
      <div class="bg-white p-4 rounded-lg text-black border border-gray-200 shadow-sm">
      <h1 className='text-lg font-medium p-4'>Best Selling Products</h1>
        <PieChart width={550} height={400}>
          <Legend/>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </div >
    );
};

export default PieCharts;