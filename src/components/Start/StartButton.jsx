import { useContext } from 'react';
import { playScreen, timer, timeRunning } from '../../App';

export default function StartButton({ buttonStyle }) {
  const [, setState] = useContext(playScreen);
  const [, setTime] = useContext(timer);
  const [, setIsRunning] = useContext(timeRunning);

  // ゲーム画面表示とタイマーのリセット
  const init = () => {
    setState('play');
    setTime(0);
    setIsRunning(true);
  };

  return (
    <button onClick={init} css={buttonStyle}>
      スタート
    </button>
  );
}
