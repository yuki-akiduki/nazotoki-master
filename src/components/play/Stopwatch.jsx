import React, { useContext, useEffect, useState } from 'react';
import { timer, timeRunning } from '../../App';
export default function Timer() {
  const [time, setTime] = useContext(timer);
  const [isRunning] = useContext(timeRunning);

  useEffect(() => {
    // タイマー処理
    let intervalId;
    const startTime = Date.now();
    // イントロ演出終了後にタイマースタート
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
