import React, { useContext, useState } from 'react';
import { NotesDispatchContext } from '../contexts/NotesContext';
import styled from 'styled-components';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const Form = styled.form`
  width: 80%;
  max-width: 800px;
  max-height: 50vh;
  margin-top: 50px;
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

  #notes-textarea{
    display: block;
    min-height: 100px;
    max-height: 60vh;
    resize: none;
    font-size: 0.9em;
    line-height: 20px;
  }

  input, textarea{
    outline: none;
    border: 0;
  }

  button{
    width: 38px;
    height: 38px;
    position: absolute;
    top: 89%;
    left: 89%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f50057;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.25);

    span{
      color: #FFF;
      font-size: 1.8em;
    }
  }
`;

const NotesForm = () => {
  // const state = useContext(NotesStateContext);
  const dispatch = useContext(NotesDispatchContext);
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
        aria-label="Notes title"
        type="text"
        name="note-title"
        id="note-title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder='Title'
      />
      <TextareaAutosize
        aria-label="Notes content"
        id="notes-textarea"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder='Enter your note content here...'
        multiline
      />
      <button className="btn-add">
        <span>+</span>
      </button>
    </Form >
  )
}

export default NotesForm;
