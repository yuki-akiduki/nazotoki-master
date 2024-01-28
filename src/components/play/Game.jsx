import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { quizListArr } from '../../utils/QuizList';
import PlayButton from './PlayButton';
import AnswerJudge from './AnswerJudge';
import End from './End';

export default function Game() {
  const [quizNum, setQuizNum] = useState(0);
  const [correcte, setCorrect] = useState(0);
  const [answer, setAnswer] = useState('');
  const [answerInput, setAnswerInput] = useState(false);
  const [answerStatus, setSAnswerStatus] = useState({
    status: '',
    text: '',
  });

  const [end, setEnd] = useState(false);

  // 正解数の設定
  const correcteLimit = 1;

  // 正誤判定
  const answerHandler = () => {
    if (quizListArr[quizNum].answer === answer) {
      setQuizNum((prev) => ++prev);
      setCorrect((prev) => ++prev);
    } else {
      // 不正解時は3秒ロス
      return new Promise((resolve) => {
        setAnswerInput(true);
        setSAnswerStatus({ status: 'incorrect', text: '不正解！' });
        resolve();
      }).then(() => {
        setTimeout(() => {
          setAnswerInput();
          setSAnswerStatus({ status: '', text: '' });
        }, 3000);
      });
    }
  };

  // 問題をパス
  const passHandeler = async () => {
    setAnswerInput(true);
    setSAnswerStatus({ status: 'pass', text: 'パス' });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setAnswerInput(false);
    setSAnswerStatus({ status: '', text: '' });
    setQuizNum((prev) => ++prev);
  };

  // 正解時、inputを空にする処理
  useEffect(() => {
    setAnswer('');
    // if (correcte === correcteLimit) {
    //   setAnswerInput(true);
    //   setEnd(true);
    // }
  }, [correcte]);

  return (
    <>
      <AnswerJudge answerStatus={answerStatus} />

      <img src={`./img/quiz/${quizListArr[quizNum].image}`} alt="" />
      <PlayButton category={`解答！`} handler={answerHandler} disabled={answerInput} />
      <PlayButton category={`パス`} handler={passHandeler} disabled={answerInput} />

      <input type="text" onChange={(e) => setAnswer(e.target.value)} value={answer} disabled={answerInput} css={inputText} />
      <p>{correcte} / 7</p>
      {correcte === correcteLimit ? <End setAnswerInput={setAnswerInput} /> : <></>}
    </>
  );
}

const inputText = css`
  &:disabled {
    background: #000;
  }
`;
