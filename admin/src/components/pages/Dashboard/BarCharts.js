import React from 'react';
import { Tooltip, Legend, BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
    {
        name: 'Page A',
        sell: 4000,
        orders: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        sell: 3000,
        orders: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        sell: 2000,
        orders: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        sell: 2780,
        orders: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        sell: 1890,
        orders: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        sell: 2390,
        orders: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        sell: 3490,
        orders: 4300,
        amt: 2100,
    },
];
const BarCharts = () => {
    return (
        <div class="bg-white p-4 rounded-lg text-black border border-gray-200 shadow-sm">
            <h1 className='text-lg font-medium p-4'>Weekly Sales</h1>
            <BarChart
                width={550}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" stackId="a" fill="#2563EB" />
                <Bar dataKey="sell" stackId="a" fill="#f1c40f" />
            </BarChart>
        </div>
    );
};

export default BarCharts;