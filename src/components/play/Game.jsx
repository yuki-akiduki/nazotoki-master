import React, { useEffect, useState } from 'react';

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

  // 正誤判定
  const changeQuizHandler = () => {
    if (shuffleQuizArr[quizNum].answer === answer) {
      setQuizNum((prev) => ++prev);
      setCorrect((prev) => ++prev);
    }
  };

  // 正解時、inputを空にする処理
  useEffect(() => {
    setAnswer('');
  }, [correcte]);

  return (
    <>
      <img src={`./img/quiz/${shuffleQuizArr[quizNum].image}`} alt="" />
      <button onClick={changeQuizHandler}>ボタン</button>
      <input type="text" onChange={(e) => setAnswer(e.target.value)} value={answer} />
      <p>{quizNum}</p>
    </>
  );
}
