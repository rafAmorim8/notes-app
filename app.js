import React from 'react';
import './src/App.css';

import NotesContextProvider from './src/contexts/NotesContext';
import NotesForm from './src/components/NotesForm';
import NotesList from './src/components/NotesList';

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
