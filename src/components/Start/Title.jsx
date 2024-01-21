import logo from '../../assets/img/logo.png';
import { css } from '@emotion/react';

export default function Title() {
  return (
    <h1 css={startTitle}>
      <img src={logo} alt="瞬間！謎解きマスター" />
    </h1>
  );
}

const startTitle = css`
  text-align: center;
  padding-top: 80px;
  img {
    max-width: 700px;
  }
`;
