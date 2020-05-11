import uuid from 'uuid/v1';

export const NotesState = {
  test: 'testing',
  test2: 'testing again',
  notes: [
    {
      id: uuid(),
      title: 'note 1',
      text: 'This is a note',
    },
    {
      id: uuid(),
      title: 'note 2',
      text: 'This is another note',
    }
  ],
  editNote: [],
}

export const NotesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      let temp = [...state.notes];
      let newNote = {
        id: uuid(),
        title: action.title,
        text: action.text
      }

      // Only adds new note if it has either a title or text
      if (!newNote.title && !newNote.text) {
        return { ...state }
      } else {
        temp.push(newNote);

        return {
          ...state,
          notes: [...temp],
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
    default:
      return state;
  }
}