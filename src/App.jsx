import { css, Global } from '@emotion/react';
import { useState, createContext } from 'react';
import Layout from './layout/Layout';
import Start from './components/Start/Start';
import Play from './components/Play/Play';
import Result from './components/Result/ResultScreen';
export const playScreen = createContext();
export const timer = createContext();
export const timeRunning = createContext();

function App() {
  // useStateで画面の出し分け処理
  const [playState, setPlayState] = useState('start');
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const screen = (State) => {
    switch (State) {
      case 'start':
        return <Start />;
      case 'play':
        return <Play />;
      case 'result':
        return <Result />;
    }
  };
  return (
    <>
      <Global styles={globalStyle} />
      <Layout>
        <playScreen.Provider value={[playState, setPlayState]}>
          <timer.Provider value={[time, setTime]}>
            <timeRunning.Provider value={[isRunning, setIsRunning]}>{screen(playState)}</timeRunning.Provider>
          </timer.Provider>
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
