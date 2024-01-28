import { useContext } from 'react';
import { timer } from '../../App';
import RetryButton from './RetryButton';

export default function restult() {
  const [time] = useContext(timer);

  return (
    <>
      <div>あなたのノルマ達成タイムは</div>
      <div>{time}</div>
      <RetryButton />
    </>
  );
}
