import { useContext } from 'react';
import { playScreen, timer, timeRunning } from '../../App';

export default function Retry() {
  const [, setState] = useContext(playScreen);
  const [, setTime] = useContext(timer);
  const [, setIsRunning] = useContext(timeRunning);

  const init = () => {
    setState('play');
    setTime(0);
    setIsRunning(true);
  };
  return <button onClick={init}>リトライ</button>;
}
