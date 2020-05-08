import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotesContextProvider from './contexts/NotesContext';

ReactDOM.render(<NotesContextProvider><App /></NotesContextProvider>, document.getElementById('root'));