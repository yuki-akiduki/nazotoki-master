import { createContext, useState } from 'react';
import Ready from './Intro';
import Timer from './Timer';
import Game from './Game';
export const gameStatus = createContext(false);

export default function Play() {
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
          <Ready />
        )}
      </gameStatus.Provider>
    </>
  );
}
