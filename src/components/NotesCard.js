import React, { useContext } from 'react';
import { NotesDispatchContext } from '../contexts/NotesContext';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Card = styled.li`
  list-style: none;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
  padding: 20px;
  transition: box-shadow 250ms ease-in-out; 
  position: relative;

  &:hover{
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
  }

  h3{
    margin-bottom: 10px;
  }

  pre{
    margin-bottom: 15px;
    font-size: 0.9em;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }
`;

const NotesCard = ({ note }) => {
  // const state = useContext(NotesStateContext);
  const dispatch = useContext(NotesDispatchContext);
  const deleteNote = id => {
    dispatch({
      type: 'DELETE_NOTE', id
    });
  }
  return (
    <Card className="notes-item">
      <h3>{note.title}</h3>
      <pre>{note.text}</pre>
      <div>
        <IconButton aria-label="edit" className="btn-edit btn-icon" onClick={e => console.log('edit')}>
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" className="btn-delete btn-icon" onClick={e => deleteNote(note.id)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </Card>
  )
}

export default NotesCard;