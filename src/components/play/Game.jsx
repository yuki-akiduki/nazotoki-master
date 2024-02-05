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
  }, [correcte]);

  return (
    <>
      <div>
        {answerInput ? <AnswerJudge answerStatus={answerStatus} /> : <></>}
        <div css={correcteInfo}>
          <p css={correcteText}>正解数</p>
          <p css={correcteTotal}>{correcte} / 7</p>
        </div>
      </div>

      <div css={quizImg}>
        <img src={`./img/quiz/${quizListArr[quizNum].image}`} alt="" />
      </div>

      <div css={field}>
        <input type="text" onChange={(e) => setAnswer(e.target.value)} value={answer} disabled={answerInput} css={inputText} />
        <div css={answerButtons}>
          <PlayButton category={`解答！`} handler={answerHandler} disabled={answerInput} cssType={'answerButton'} />
          <PlayButton category={`パス`} handler={passHandeler} disabled={answerInput} cssType={'passButton'} />
        </div>
        <p>{correcte} / 7</p>
      </div>
      {correcte === correcteLimit ? <End setAnswerInput={setAnswerInput} /> : <></>}
    </>
  );
}

const inputText = css`
  display: block;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #000;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  &:disabled {
    background: #000;
  }
`;

const quizImg = css`
  max-width: 300px;
  margin-top: 80px;
  margin-right: auto;
  margin-left: auto;
`;

const field = css`
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 16px;
`;

const correcteInfo = css`
  margin-top: 16px;
`;
const correcteText = css`
  font-size: 12px;
`;

const correcteTotal = css`
  font-size: 24px;
`;

const answerButtons = css`
  display: flex;
  column-gap: 16px;
  align-items: flex-end;
  justify-content: center;
  margin-top: 32px;
`;
