import React from 'react'
import { useState, useEffect } from 'react';
import { convertTime, convertTimeToSecond } from '../utilis/auxiliaryfunction';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [showTime, setShowTime] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [isEdited, setIsEdited] = useState({
    hour: false,
    minute: false,
    second: false
  });
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {

        setTime((prevTime) => prevTime + 1);

      }, 1000)
    }


    return () => clearInterval(interval);
  }, [isActive])



  useEffect(() => {
    setShowTime(convertTime(time));
  }, [time])

  return (
    <div className='bg-slate-800 m-0 p-0 h-screen flex justify-center items-center'>
      <div className="bg-slate-600 h-[65%] w-[40%] rounded-md flex flex-col justify-center items-center">
        <div className="text-center text-6xl text-white p-5">
          {["hour", "minute", "second"].map((unit, index) => (
            <span
              key={unit}
              className="cursor-pointer"
              onClick={() => {
                setIsActive(false);
                setIsEdited(prev => ({ ...prev, [unit]: true }));
              }}
            >
              {isEdited[unit] ? (
                <input type="text" className="bg-slate-600 text-white w-14 text-xl h-14 rounded-md text-center" maxLength={2} onChange={(e)=>{setShowTime(prev=>({...prev,[unit]:e.target}))}}/>
              ) : (
                showTime[unit]
              )}
              {index < 2 && ":"}
            </span>
          ))}
        </div>

        <div className="flex justify-center items-center gap-5">
          <button className='bg-green-500 p-2 rounded-md text-white' onClick={() => { setIsActive(true); }}>Start</button>
          <button className="bg-red-500 p-2 rounded-md text-white" onClick={() => { setTime(0); setIsActive(false) }}>Stop</button>
          <button className="bg-blue-500 p-2 rounded-md text-white" onClick={() => setIsActive(false)}>Pause</button>
        </div>
      </div>

    </div>
  )
}

export default Timer
