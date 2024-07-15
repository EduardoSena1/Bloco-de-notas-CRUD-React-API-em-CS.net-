import React, { useState } from 'react';

const NoteForm = ({ onSave, onClose }) => {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [corBackground, setCorBackground] = useState('#ffffff');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ titulo, texto, corBackground, dataHora: new Date().toISOString(), favorita: false });
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" required />
        <textarea value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Conteúdo"></textarea>
        <input type="color" value={corBackground} onChange={(e) => setCorBackground(e.target.value)} />
        <button type="submit">Salvar</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
};

export default NoteForm;
