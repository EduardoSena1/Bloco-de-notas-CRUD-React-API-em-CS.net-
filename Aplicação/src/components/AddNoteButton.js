import React from 'react';

export function AddNoteButton({ onClick }) {
  return (
    <button className="adicionar" onClick={onClick}>
      <i className="fas fa-plus"></i> Nova nota
    </button>
  );
}
