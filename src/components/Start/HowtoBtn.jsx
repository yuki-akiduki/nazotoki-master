import React from 'react';

export default function HowtoBtn({ handleOpenModal, buttonStyle }) {
  return (
    <button onClick={handleOpenModal} css={buttonStyle}>
      あそびかた
    </button>
  );
}
