import React, { useContext, useState, useEffect } from 'react';
import { NotesDispatchContext, NotesStateContext } from '../contexts/NotesContext';
import styled from 'styled-components';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import EditIcon from '@material-ui/icons/Edit';

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
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.25);
    color: #FFF;

    span{
      font-size: 1.8em;
    }
  }

  .btn-add{
    background: #f50057;
  }

  .btn-edit{
    background: #42a5f5;
  }
`;

const NotesForm = () => {
  const { editNote } = useContext(NotesStateContext);
  const dispatch = useContext(NotesDispatchContext);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!editNote) {
      dispatch({
        type: 'ADD_NOTE', text, title
      });
    } else {
      dispatch({
        type: 'EDIT_NOTE', text, title, id
      });
    }
    setText('');
    setTitle('');
  }

  useEffect(() => {
    if (!editNote) {
      setTitle('');
      setText('');
      setId('');
    } else {
      setTitle(editNote.title);
      setText(editNote.text);
      setId(editNote.id)
    }
  }, [editNote])

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
      {
        !editNote ?
          <button className="btn-add" aria-label="Add">
            <span>+</span>
          </button> :
          <button className="btn-edit" aria-label="Edit">
            <EditIcon />
          </button>
      }

    </Form >
  )
}

export default NotesForm;
