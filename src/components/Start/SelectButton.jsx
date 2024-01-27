import { css } from '@emotion/react';
import { useState } from 'react';
import Howto from './Howto';
import HowtoBtn from './HowtoBtn';
import StartButton from './StartButton';

export default function SelectButton() {
  const [openModal, setOpneModal] = useState(false);

  // モーダルを開く処理
  const handleOpenModal = () => {
    setOpneModal((prevcount) => {
      return !prevcount;
    });
  };

  return (
    <>
      <div css={buttonArea}>
        <div css={wrap}>
          <StartButton buttonStyle={selectBtn} />
        </div>
        <div css={[wrap, margin]}>
          <HowtoBtn handleOpenModal={handleOpenModal} buttonStyle={selectBtn} />
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
`;

const selectBtn = css`
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
`;

const margin = css`
  margin-top: 24px;
`;
