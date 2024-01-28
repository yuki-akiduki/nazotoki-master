import { createContext, useState } from 'react';
import Intro from './Intro';
import Timer from './Timer';
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
            <Timer />
            <Game />
          </>
        ) : (
          <Intro />
        )}
      </gameStatus.Provider>
    </>
  );
}
