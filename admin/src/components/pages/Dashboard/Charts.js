import React from 'react';
import PieCharts from './PieCharts';
import LineCharts from './BarCharts';

const Charts = () => {
    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container py-5 mx-auto">
                <div class="flex flex-wrap">
                    <div class="p-2 md:w-1/2 flex flex-col items-start">
                        <LineCharts />
                    </div>
                    <div class="p-2 md:w-1/2 flex flex-col items-start">
                        <PieCharts />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Charts;