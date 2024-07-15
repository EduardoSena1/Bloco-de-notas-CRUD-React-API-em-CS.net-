import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { Menu } from './components/Menu';
import { AddNoteButton } from './components/AddNoteButton';
import { Modal } from './components/Modal';
import { NotesContainer } from './components/NotesContainer';
import { buscarNotas, addNota, atualizarNota, deletaNota, favoritarNota } from './services/api';
import './App.css';

function App() {

  //constantes para auxiliar na funções visuais e funcionais
  const [modalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [section, setSection] = useState('notas');

  // Inicializa com todas as notas
  useEffect(() => {
    const CarregarNotas = async () => {
      const CarregarNotas = await buscarNotas();
      setNotes(CarregarNotas);
      setFilteredNotes(CarregarNotas);
    };

    CarregarNotas();
  }, []);

  const handleAddNote = async (text, color) => {
    const newNote = { texto: text, corBackground: color, favorita: false, dataHora: new Date().toISOString() };
    const addedNote = await addNota(newNote);
    const updatedNotes = [...notes, addedNote];
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
    setModalOpen(false);
  };

  const handleFavoriteToggle = async (id) => {
    await favoritarNota(id);
    const updatedNotes = notes.map(note => note.id === id ? { ...note, favorita: !note.favorita } : note);
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
  };

  const handleEdit = (id) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, isEditing: true } : note)));
  };

  const handleSave = async (id, text) => {
    const updatedNote = notes.find(note => note.id === id);
    updatedNote.texto = text;
    await atualizarNota(id, updatedNote);
    const updatedNotes = notes.map(note => (note.id === id ? { ...note, texto: text, isEditing: false } : note));
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
  };

  const handleDelete = async (id) => {
    await deletaNota(id);
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
  };

  const mostrartodasnotas = () => {
    setFilteredNotes(notes);
    setSection('notas');
  };
// pega as notas por ordem de criação mais recentes
  const carregarRecentes = () => {
    const recentNotes = [...notes].sort((a, b) => new Date(b.dataHora) - new Date(a.dataHora)).slice(0, 5);
    setFilteredNotes(recentNotes);
    setSection('recentes');
  };
//carrega as notas marcadas com favoritas
  const carregarFovitas = () => {
    const favoriteNotes = notes.filter(note => note.favorita);
    setFilteredNotes(favoriteNotes);
    setSection('favoritas');
  };

  return (
    <div className="container">
      {/* componentes e suas funções associadas */}
      <Header />

      <Menu
        onSelectSection={(section) => {
          if (section === 'notas') mostrartodasnotas();
          if (section === 'recentes') carregarRecentes();
          if (section === 'favoritas') carregarFovitas();
        }}
      />
      <AddNoteButton onClick={() => setModalOpen(true)} />
      <NotesContainer
        section={section}
        notes={filteredNotes}
        onFavoriteToggle={handleFavoriteToggle}
        onEdit={handleEdit}
        onSave={handleSave}
        onDelete={handleDelete}
      />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSave={handleAddNote} />
    </div>
  );
}

export default App;
