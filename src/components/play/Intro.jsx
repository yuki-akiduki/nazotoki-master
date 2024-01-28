import { css } from '@emotion/react';
import { useState, useContext, useEffect } from 'react';
import { gameStatus } from './Play';
export default function Intro() {
  const [showReady, setShowReady] = useState(true);
  const [showGo, setShowGo] = useState(false);

  const [, setGameState] = useContext(gameStatus);

  useEffect(() => {
    // イントロの演出処理
    const showInto = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setShowReady(false);
      setShowGo(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShowGo(false);
      setGameState(true);
    };
    showInto();
  }, []);

  return (
    <>
      <div css={wrap}>
        {showReady ? <div css={[positon, ready]}>Ready</div> : <></>}
        {showGo ? <div css={[positon, go]}>Go!!</div> : <></>}
      </div>
    </>
  );
}

const wrap = css`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  height: 100%;
`;
const positon = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ready = css`
  font-size: 64px;
  font-weight: bold;
  animation: readyFadeIn 2s ease-out forwards;
  transform-origin: center;
  @keyframes readyFadeIn {
    0% {
      transform: translate(-50%, -50%) scale(5);
    }

    70% {
      transform: translate(-50%, -50%) scale(1);
    }

    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const go = css`
  font-size: 50px;
  font-weight: bold;
`;
