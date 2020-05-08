import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Card = styled.li`
  list-style: none;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
  padding: 20px;
`;

const NotesCard = ({ note }) => {
  return (
    <Card className="notes-item">
      <h3>{note.title}</h3>
      <pre>{note.text}</pre>
      <div>
        <IconButton aria-label="delete" className="btn-delete" onClick={e => console.log('delete')}>
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="edit" className="btn-edit" onClick={e => console.log('edit')}>
          <EditIcon fontSize="small" />
        </IconButton>
      </div>
    </Card>
  )
}

export default NotesCard;