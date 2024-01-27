import { css, Global } from '@emotion/react';
import Start from './components/Start/Start';
import Layout from './layout/Layout';
import { useState, createContext } from 'react';
import Play from './components/play/Play';
export const playScreen = createContext('start');

function App() {
  // useStateで画面の出し分け処理
  const [playState, setPlayState] = useState('start');
  return (
    <>
      <Global styles={globalStyle} />
      <Layout>
        <playScreen.Provider value={[playState, setPlayState]}>
          {playState === 'start' ? (
            <>
              <Start />
            </>
          ) : playState === 'play' ? (
            <>
              <Play />
            </>
          ) : (
            playState ===
            'result'(
              <>
                <p>結果</p>
              </>,
            )
          )}
        </playScreen.Provider>
      </Layout>
    </>
  );
}

const globalStyle = css`
  img {
    height: auto;
    width: 100%;
  }
`;

export default App;
