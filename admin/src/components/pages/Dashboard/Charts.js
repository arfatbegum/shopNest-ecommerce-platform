import React from 'react';
import PieCharts from './PieCharts';
import LineCharts from './BarCharts';

const Charts = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container py-5 mx-auto">
                <div className="flex flex-wrap">
                    <div className="p-2 md:w-1/2 flex flex-col items-start">
                        <LineCharts />
                    </div>
                    <div className="p-2 md:w-1/2 flex flex-col items-start">
                        <PieCharts />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Charts;