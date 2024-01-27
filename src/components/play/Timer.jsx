import React, { useEffect, useState } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;
    const startTime = Date.now();

    if (isRunning) {
      intervalId = setInterval(() => {
        const date = new Date(Date.now() - startTime);
        const minute = String(date.getMinutes()).padStart(2, '0');
        const second = String(date.getSeconds()).padStart(2, '0');
        const millsecond = String(date.getMilliseconds()).padStart(3, '0');
        setTime(`${minute}:${second}:${millsecond}`);
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <>
      <div>{time}</div>
    </>
  );
}
