import { css } from '@emotion/react';

export default function Layout({ children }) {
  return (
    <div css={area}>
      <div css={container}>{children}</div>
    </div>
  );
}

const area = css`
  padding: 24px;
  height: 100dvh;
  min-height: 800px;
`;

const container = css`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
`;
