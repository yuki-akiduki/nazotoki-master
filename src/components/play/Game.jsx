import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

// クイズリスト
const quizList = [
  {
    image: 'img01.png',
    answer: 'みかん',
  },
  {
    image: 'img02.png',
    answer: 'りんご',
  },
  {
    image: 'img03.png',
    answer: 'すいか',
  },
];

// リストをシャッフルして、出題順を決める
const shuffleQuizArr = [...quizList];
const quizTotal = shuffleQuizArr.length;
for (let i = quizTotal - 1; i >= 0; i--) {
  const randomIndex = Math.floor(Math.random() * (i + 1));
  [shuffleQuizArr[i], shuffleQuizArr[randomIndex]] = [shuffleQuizArr[randomIndex], shuffleQuizArr[i]];
}
console.log(shuffleQuizArr);
export default function Game() {
  const [quizNum, setQuizNum] = useState(0);
  const [correcte, setCorrect] = useState(0);
  const [answer, setAnswer] = useState('');
  const [answerFiled, setAnswerFiled] = useState(false);

  // 正誤判定
  const answerHandler = () => {
    if (shuffleQuizArr[quizNum].answer === answer) {
      setQuizNum((prev) => ++prev);
      setCorrect((prev) => ++prev);
    } else {
      // 不正解時は3秒ロス
      return new Promise((resolve) => {
        setAnswerFiled(true);
        resolve();
      }).then(() => {
        setTimeout(() => {
          setAnswerFiled(false);
        }, 3000);
      });
    }
  };

  // 問題をパス
  const passHandeler = async () => {
    setAnswerFiled(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setAnswerFiled(false);
    setQuizNum((prev) => ++prev);
  };

  // 正解時、inputを空にする処理
  useEffect(() => {
    setAnswer('');
    if (correcte === 2) {
      setAnswerFiled(true);
    }
  }, [correcte]);

  return (
    <>
      <img src={`./img/quiz/${shuffleQuizArr[quizNum].image}`} alt="" />
      <button onClick={answerHandler} disabled={answerFiled}>
        ボタン
      </button>
      <button onClick={passHandeler} disabled={answerFiled}>
        パス
      </button>
      <input type="text" onChange={(e) => setAnswer(e.target.value)} value={answer} disabled={answerFiled} css={inputText} />
      <p>{quizNum}</p>
    </>
  );
}

const inputText = css`
  &:disabled {
    background: #000;
  }
`;
