import React, { useEffect, useState } from 'react';

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
export default function Game() {
  const [quizNum, setQuizNum] = useState(0);
  const [answerState, setAnswerState] = useState(0);
  const shuffleQuiz = quizList.concat();
  const quizTotal = shuffleQuiz.length;
  for (let i = quizTotal - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffleQuiz[i], shuffleQuiz[randomIndex]] = [shuffleQuiz[randomIndex], shuffleQuiz[i]];
  }
  console.log(shuffleQuiz);

  return (
    <>
      <img src={`./img/quiz/${shuffleQuiz[quizNum].image}`} alt="" />
    </>
  );
}
