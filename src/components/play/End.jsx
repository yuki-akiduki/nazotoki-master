import React, { useEffect, useContext } from 'react';
import { playScreen, timeRunning } from '../../App';

export default function End({ setAnswerInput }) {
  // 画面出し分け処理
  const [, setState] = useContext(playScreen);
  const [, setTimeRunning] = useContext(timeRunning);

  useEffect(() => {
    setAnswerInput(true);
    setTimeRunning(false);
    setTimeout(() => {
      setState('result');
    }, 3000);
  }, []);

  return <div>終了！</div>;
}
