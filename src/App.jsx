import { css, Global } from '@emotion/react';
import Start from './components/Start/Start';
import Layout from './layout/Layout';
import { useState, createContext } from 'react';
import Play from './components/play/Play';
export const playScreen = createContext('start');

function App() {
  // useStateで画面の出し分け処理
  const [playState, setPlayState] = useState('start');
  const screen = (State) => {
    switch (State) {
      case 'start':
        return <Start />;
      case 'play':
        return <Play />;
      case 'result':
        return <p>結果</p>;
    }
  };
  return (
    <>
      <Global styles={globalStyle} />
      <Layout>
        <playScreen.Provider value={[playState, setPlayState]}>{screen(playState)}</playScreen.Provider>
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
