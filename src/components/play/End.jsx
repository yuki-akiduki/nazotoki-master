import React, { useEffect, useContext, useState } from 'react';
import { playScreen } from '../../App';

export default function End({ setAnswerInput }) {
  const [, setState] = useContext(playScreen);

  useEffect(() => {
    setAnswerInput(true);
    setTimeout(() => {
      setState('result');
    }, 3000);
  }, []);

  return <div>終了！</div>;
}
