import { useContext } from 'react';
import { playScreen } from '../../App';

export default function StartButton({ buttonStyle }) {
  const [, setState] = useContext(playScreen);
  const handle = () => {
    setState('play');
  };

  return (
    <button onClick={handle} css={buttonStyle}>
      スタート
    </button>
  );
}
