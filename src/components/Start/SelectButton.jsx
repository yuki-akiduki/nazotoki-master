import { css } from '@emotion/react';
import { useState } from 'react';
import Howto from './Howto';
export default function SelectButton() {
  const [openModal, setOpneModal] = useState(false);
  const handleOpenModal = () => {
    setOpneModal((prevcount) => {
      return !prevcount;
    });
  };
  return (
    <>
      <div css={buttonArea}>
        <div css={wrap}>
          <button>スタート</button>
        </div>
        <div css={[wrap, margin]}>
          <button onClick={handleOpenModal}>あそびかた</button>
        </div>
      </div>
      {openModal ? <Howto /> : <></>}
    </>
  );
}

const buttonArea = css`
  margin-top: 120px;
`;

const wrap = css`
  text-align: center;

  button {
    font-size: 32px;
    font-weight: bold;
    position: relative;
    @media (hover: hover) {
      &:hover::before {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        height: 0.4em;
        width: 100%;
        background: #c5fd29;
        z-index: -1;
        opacity: 0.8;
      }
    }
  }
`;

const margin = css`
  margin-top: 24px;
`;
