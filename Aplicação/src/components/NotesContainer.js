import React from 'react';
import { Note } from './Note';

export const NotesContainer = ({ section, notes, onFavoriteToggle, onEdit, onSave, onDelete }) => {
  return (
    <div className="notes-container">
      {notes.map(note => (
        <Note 
          key={note.id}
          note={note}
          onFavoriteToggle={onFavoriteToggle}
          onEdit={onEdit}
          onSave={onSave}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
