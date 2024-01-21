import { css, Global } from '@emotion/react';
import Start from './components/Start/Start';
import Layout from './layout/Layout';
function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Layout>
        <Start />
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
