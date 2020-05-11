import React, { useContext } from 'react';
import { NotesDispatchContext } from '../contexts/NotesContext';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Card = styled.li`
  list-style: none;
  box-shadow: 0 0 2px rgba(0,0,0,0.3);
  border-radius: 5px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 250ms ease-in-out; 

  &:hover{
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
  }

  .card-content{
    display: flex;
    flex-direction: column;
 
    h3{
      margin-bottom: 10px;
      overflow-wrap: break-word;
    }

    pre{
      white-space: pre-wrap;
      margin-bottom: 15px;
      font-size: 0.9em;
      overflow-wrap: break-word;
    }
  }


  div {
    display: flex;
    justify-content: flex-end;
  }
`;

const NotesCard = ({ note }) => {
  const dispatch = useContext(NotesDispatchContext);
  const deleteNote = id => {
    dispatch({
      type: 'DELETE_NOTE', id
    });
  }
  return (
    <Card className="notes-item">
      <div className="card-content">
        <h3>{note.title}</h3>
        <pre>{note.text}</pre>

      </div>
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