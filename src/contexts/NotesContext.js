import React, { createContext, useReducer, useEffect } from 'react';
import { NotesReducer, NotesState } from './notes';

export const NotesStateContext = createContext();
export const NotesDispatchContext = createContext();


const NotesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NotesReducer, NotesState);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(state.notes));
  }, [state.notes]);

  return (
    <NotesStateContext.Provider value={state}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesStateContext.Provider>
  );
}

export default NotesContextProvider;