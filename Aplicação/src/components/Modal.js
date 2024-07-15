import React, { useState } from 'react';

export function Modal({ isOpen, onClose, onSave }) {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#fecf6a'); 

  const handleSave = () => {
    onSave(text, color);
    setText('');
    setColor('#fecf6a'); 
  };

  if (!isOpen) return null;

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-prancheta">
          <div id="colorPalette">
            <div
              className={`color ${color === '#b676b1' ? 'selected' : ''}`}
              style={{ backgroundColor: '#b676b1' }}
              onClick={() => setColor('#b676b1')}
            ></div>
            <div
              className={`color ${color === '#82caaf' ? 'selected' : ''}`}
              style={{ backgroundColor: '#82caaf' }}
              onClick={() => setColor('#82caaf')}
            ></div>
            <div
              className={`color ${color === '#75c0e0' ? 'selected' : ''}`}
              style={{ backgroundColor: '#75c0e0' }}
              onClick={() => setColor('#75c0e0')}
            ></div>
            <div
              className={`color ${color === '#fecf6a' ? 'selected' : ''}`}
              style={{ backgroundColor: '#fecf6a' }}
              onClick={() => setColor('#fecf6a')}
            ></div>
            <div
              className={`color ${color === '#df1c44' ? 'selected' : ''}`}
              style={{ backgroundColor: '#df1c44' }}
              onClick={() => setColor('#df1c44')}
            ></div>
            <div
              className={`color ${color === '#194a8d' ? 'selected' : ''}`}
              style={{ backgroundColor: '#194a8d' }}
              onClick={() => setColor('#194a8d')}
            ></div>
          </div>
          <button className="btn-modal" onClick={handleSave}><i className="bi bi-check-circle-fill"></i></button>
          <button className="btn-modal" onClick={onClose}><i className="bi bi-x-circle-fill"></i></button>
          <div className="textarea-container" style={{ backgroundColor: color }} id="notaContainer">
            <textarea
              id="novaNota"
              placeholder="Escreva aqui"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ backgroundColor: color }}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
