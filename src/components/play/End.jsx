import React, { useEffect, useContext } from 'react';
import { playScreen } from '../../App';

export default function End({ setAnswerInput }) {
  // 画面出し分け処理
  const [, setState] = useContext(playScreen);

  useEffect(() => {
    setAnswerInput(true);
    setTimeout(() => {
      setState('result');
    }, 3000);
  }, []);

  return <div>終了！</div>;
}
