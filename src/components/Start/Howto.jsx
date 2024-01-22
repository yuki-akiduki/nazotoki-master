import { css } from '@emotion/react';

export default function Howto() {
  return (
    <div css={wrap}>
      <div css={overlay}>
        <div css={modal}>
          <h2 css={heading}>あそびかた</h2>
          <p>出てきた謎を解け！</p>

          <p>
            解答の入力はすべて<span>ひらがな</span>で答えろ！
          </p>
          <p>答えが「1」の場合→「いち」</p>
          <p>答えが「CAKE」の場合→「けーき」</p>
        </div>
      </div>
    </div>
  );
}

const wrap = css`
  z-index: 5;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 40px 10px;
`;

const overlay = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgba(0, 0, 0, 0.4);
  padding: 24px;
`;

const modal = css`
  width: 100%;
  height: 100px;
  padding: 30px;
  background: #fff;
  min-height: 300px;
  max-width: 600px;
`;

const heading = css`
  font-size: 24px;
  padding-bottom: 5px;
  border-bottom: 3px solid #000;
`;
