import React from 'react';
import './App.css';

import NotesContextProvider from './contexts/NotesContext';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';

function App() {
  return (
    <NotesContextProvider>
      <div className="wrapper">
        <NotesForm />
        <NotesList />
      </div>
    </NotesContextProvider>
  );
}

export default App;
