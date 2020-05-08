import React, { useContext, useState } from 'react';
import { NotesStateContext, NotesDispatchContext } from '../contexts/NotesContext';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const Form = styled.form`
  width: 80%;
  padding: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 5px;
  margin-bottom: 40px;
  background: #FFF;

  input {
    font-weight: 700;
    margin-bottom: 10px;
  }

  textarea{
    resize: none;
  }

  input, textarea{
    outline: none;
    border: 0;
  }

  button{
    position: absolute;
    top: 89%;
    left: 92%;
  }
`;

const NotesForm = () => {
  const state = useContext(NotesStateContext);
  const dispatch = useContext(NotesDispatchContext);
  // const { test, test2 } = state;
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch({
      type: 'ADD_NOTE', text, title
    });

    setText('');
    setTitle('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        name="note-title"
        id="note-title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder='Title'
      />
      <textarea
        name="note-text"
        id="note-text"
        cols="30"
        rows="5"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder='Enter your note content here'
      >
      </textarea>
      <button type="submit">
        <Fab size="small" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </button>
    </Form>
  )
}

export default NotesForm;
