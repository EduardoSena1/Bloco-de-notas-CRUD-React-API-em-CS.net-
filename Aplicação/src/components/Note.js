import React, { useState } from 'react';

export function Note({ note, onFavoriteToggle, onEdit, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.texto);

  const handleFavoriteToggle = () => {
    onFavoriteToggle(note.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(note.id, editedText);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(note.id);
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div className="nota" style={{ backgroundColor: note.corBackground }}>
      <div className="configuracao">
        <button className="favoritar" onClick={handleFavoriteToggle}>
          <i className={`${note.favorita ? 'fas' : 'far'} fa-star`}></i>
        </button>
        <button className="editar" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
        </button>
        {isEditing ? (
          <button className="salvar" onClick={handleSave}>
            <i className="fa-solid fa-floppy-disk"></i>
          </button>
        ) : null}
        <button className="deletar" onClick={handleDelete}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
      {isEditing ? (
        <textarea className="main" value={editedText} onChange={handleTextChange}></textarea>
      ) : (
        <div className="main">{note.texto}</div>
      )}
    </div>
  );
}
