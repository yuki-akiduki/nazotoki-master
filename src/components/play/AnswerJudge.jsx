import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

export default function AnswerJudge({ answerStatus }) {
  const [text, setText] = useState('');

  if (answerStatus.status === 'incorrect') {
    console.log('matigai');
  } else if (answerStatus.status === 'pass') {
    console.log('neko');
  } else {
    return;
  }

  console.log(answerStatus);

  return <div>{answerStatus.text}</div>;
}
