import uuid from 'uuid/v1';

export const NotesState = {
  notes: JSON.parse(localStorage.getItem('notes')) || [],
  editNote: null,
}

export const NotesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      let tempNotes = [...state.notes];
      let newNote = {
        id: uuid(),
        title: action.title,
        text: action.text
      }

      // Only adds new note if it has either a title or text
      if (!newNote.title && !newNote.text) {
        return { ...state }
      } else {
        tempNotes.push(newNote);

        return {
          ...state,
          notes: [...tempNotes],
        }
      }
    };
    case 'DELETE_NOTE': {
      let currNotes = [...state.notes];
      let updatedNotes = currNotes.filter(note => note.id !== action.id);
      return {
        ...state,
        notes: [...updatedNotes]
      }
    };
    case 'FIND_NOTE': {
      const noteFound = state.notes.find(note => note.id === action.id);
      console.log(action.id);
      return {
        ...state,
        editNote: noteFound
      }
    };
    case 'EDIT_NOTE': {
      const tempNotes = state.notes.map(note => (note.id === action.id ? { title: action.title, text: action.text, id: action.id } : note));

      return {
        ...state,
        notes: [...tempNotes],
        editNote: null
      }
    }
    default:
      return state;
  }
}