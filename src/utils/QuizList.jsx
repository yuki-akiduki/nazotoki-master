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

export const quizListArr = [...shuffleQuizArr];
