import React, { useState, useEffect } from 'react';

const CountDown = () => {
    const [days, setDays] = useState(45);
    const [hours, setHours] = useState(10);
    const [minutes, setMinutes] = useState(24);
    const [seconds, setSeconds] = useState(38);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    if (hours > 0) {
                        setHours(hours - 1);
                        setMinutes(59);
                        setSeconds(59);
                    } else {
                        if (days > 0) {
                            setDays(days - 1);
                            setHours(23);
                            setMinutes(59);
                            setSeconds(59);
                        } else {
                            clearInterval(interval);
                        }
                    }
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [days, hours, minutes, seconds]);

    return (
        <div className="grid grid-flow-col text-center auto-cols-max">
            <div className="flex flex-col p-2">
                <span className="countdown font-mono text-sm bg-primary text-white p-2 rounded-full">
                    <span style={{ "--value": days }}></span>
                </span>
                <p className='text-xs'>Days</p>
            </div>
            <span className='text-2xl font-bold mt-2'>:</span>
            <div className="flex flex-col p-2">
                <span className="countdown font-mono text-sm bg-primary text-white p-2 rounded-full">
                    <span style={{ "--value": hours }}></span>
                </span>
                <p className='text-xs'>Hours</p>
            </div>
            <span className='text-2xl font-bold mt-2'>:</span>
            <div className="flex flex-col p-2 ">
                <span className="countdown font-mono text-sm bg-primary text-white p-2 rounded-full">
                    <span style={{ "--value": minutes }}></span>
                </span>
                <p className='text-xs'>Min</p>
            </div>
            <span className='text-2xl font-bold mt-2'>:</span>
            <div className="flex flex-col p-2">
                <span className="countdown font-mono text-sm bg-primary text-white p-2 rounded-full">
                    <span style={{ "--value": seconds }}></span>
                </span>
                <p className='text-xs'>Sec</p>
            </div>
        </div>
    );
};

export default CountDown;
