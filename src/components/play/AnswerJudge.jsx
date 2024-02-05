import { css } from '@emotion/react';

export default function AnswerJudge({ answerStatus }) {
  return (
    <div css={overlay}>
      <div css={box}>
        <div>
          <div css={[status, setTextCss(answerStatus.status)]}>{answerStatus.text}</div>
        </div>
      </div>
    </div>
  );
}

const overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
`;

const box = css`
  position: absolute;
  max-width: 300px;
  width: 100%;
  height: 300px;
  background: #fff;
  padding: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const status = css`
  font-size: 40px;
  position: relative;
  padding-bottom: 20px;
  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 50%;
    transform: translatex(-50%);
    transform-origin: left center;
    height: 10px;
    width: 270px;
    @keyframes gage {
      to {
        transform: translatex(-50%) scaleX(0);
      }

      from {
        transform: translatex(-50%) scaleX(1);
      }
    }
  }
`;

const setTextCss = (type) => {
  if (type === 'incorrect') {
    return css`
      color: #f80000;
      &::before {
        background: #f80000;
        animation: gage 3s linear;
      }
    `;
  } else if (type === 'pass') {
    return css`
      color: #008512;
      &::before {
        background: #008512;
        animation: gage 1s linear;
      }
    `;
  }
};
