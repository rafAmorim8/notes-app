import React, { useContext } from 'react';
import { NotesStateContext } from '../contexts/NotesContext';
import styled from 'styled-components';
import NotesCard from './NotesCard';

const Notes = styled.div`
  width: 80%;

  .notes-list{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    grid-gap: 25px;
    margin: 30px auto 0 auto;
  }
`;

const NotesList = () => {
  const state = useContext(NotesStateContext);
  const { notes } = state;

  return (
    <Notes>
      {notes.length ? (
        <ul className="notes-list">
          {notes.map(note => {
            return <NotesCard key={note.id} note={note} />
          })}
        </ul>
      ) : (
          <div className="empty-notes">No Notes</div>
        )}
    </Notes>
  )
}

export default NotesList;