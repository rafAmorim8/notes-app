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
      temp.push(newNote);

      return {
        ...state,
        notes: [...temp],
      }
    };
    default:
      return state;
  }
}