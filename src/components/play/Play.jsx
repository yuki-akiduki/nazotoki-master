import { createContext, useState } from 'react';
import Intro from './Intro';
import Stopwatch from './Stopwatch';
import Game from './Game';
export const gameStatus = createContext(false);

export default function Play() {
  // イントロとゲーム画面をuseCoxntextで管理
  const [gameState, setGameState] = useState(false);
  return (
    <>
      <gameStatus.Provider value={[gameState, setGameState]}>
        {gameState ? (
          <>
            <Stopwatch />
            <Game />
          </>
        ) : (
          <Intro />
        )}
      </gameStatus.Provider>
    </>
  );
}
