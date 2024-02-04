import { css } from '@emotion/react';
const setButton = (type) => {
  if (type === 'answerButton') {
    return css`
      font-size: 28px;
      color: #fff;
      background: #f80000;
      border: 1px solid #f80000;
      @media (hover: hover) {
        &:hover {
          background: #fff;
          color: #f80000;
        }
      }
    `;
  } else if (type === 'passButton') {
    return css`
      font-size: 20px;
      color: #000;
      background: #d9d9d9;
      border: 1px solid #d9d9d9;

      @media (hover: hover) {
        &:hover {
          background: #fff;
        }
      }
    `;
  }
};

export default function Button({ category, handler, disabled, cssType }) {
  return (
    <button onClick={handler} disabled={disabled} css={[setButton(cssType), buttonStyle]}>
      {category}
    </button>
  );
}

const buttonStyle = css`
  padding: 8px;
  border-radius: 4px;
`;
