import React from 'react';
import { Tooltip, Legend, BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
    {
        name: 'Page A',
        sell: 40,
        orders: 24,
        amt: 24,
    },
    {
        name: 'Page B',
        sell: 30,
        orders: 13,
        amt: 22,
    },
    {
        name: 'Page C',
        sell: 20,
        orders: 98,
        amt: 22,
    },
    {
        name: 'Page D',
        sell: 27,
        orders: 39,
        amt: 20,
    },
    {
        name: 'Page E',
        sell: 18,
        orders: 40,
        amt: 21,
    },
    {
        name: 'Page F',
        sell: 23,
        orders: 38,
        amt: 25,
    },
    {
        name: 'Page G',
        sell: 34,
        orders: 40,
        amt: 21,
    },
];
const BarCharts = () => {
    return (
        <div className="bg-white p-4 rounded-lg text-black border border-gray-200 shadow-sm">
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
                <Bar dataKey="orders" stackId="a" fill="#CCE5FF" />
                <Bar dataKey="sell" stackId="a" fill="#99CCFF" />
            </BarChart>
        </div>
    );
};

export default BarCharts;