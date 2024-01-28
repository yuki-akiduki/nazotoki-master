import React from 'react';

export default function Button({ category, handler, disabled }) {
  return (
    <button onClick={handler} disabled={disabled}>
      {category}
    </button>
  );
}
