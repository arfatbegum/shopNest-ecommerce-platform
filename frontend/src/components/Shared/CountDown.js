import React from 'react';

const CountDown = () => {
    return (
        <div className="grid grid-flow-col text-center auto-cols-max">
            <div className="flex flex-col p-2">
                <span className="countdown font-mono text-sm bg-primary text-white p-2 rounded-full">
                    <span style={{ "--value": 15 }}></span>
                </span>
                <p className='text-xs'>Days</p>
            </div>
            <span className='text-2xl font-bold mt-2'>:</span>
            <div className="flex flex-col p-2">
                <span className="countdown font-mono text-sm bg-primary text-white p-2 rounded-full">
                    <span style={{ "--value": 10 }}></span>
                </span>
                <p className='text-xs'>Hours</p>
            </div>
            <span className='text-2xl font-bold mt-2'>:</span>
            <div className="flex flex-col p-2 ">
                <span className="countdown font-mono text-sm bg-primary text-white p-2 rounded-full">
                    <span style={{ "--value": 24 }}></span>
                </span>
                <p className='text-xs'>Min</p>
            </div>
            <span className='text-2xl font-bold mt-2'>:</span>
            <div className="flex flex-col p-2">
                <span className="countdown font-mono text-sm bg-primary text-white p-2 rounded-full">
                    <span style={{ "--value": 38 }}></span>
                </span>
                <p className='text-xs'>Sec</p>
            </div>
        </div>
    );
};

export default CountDown;