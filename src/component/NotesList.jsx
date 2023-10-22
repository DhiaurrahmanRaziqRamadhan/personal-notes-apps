import React from "react";
import NotesActive from "./NotesActive";
import NotesArchive from "./NotesArchive";

function NotesList({ activeNotes, archivedNotes, onDelete, onToggleArchived }) {
  return (
    <div className="notes-list">
      <NotesActive notes={activeNotes} onDelete={onDelete} onToggleArchived={onToggleArchived}/>
      <NotesArchive notes={archivedNotes} onDelete={onDelete} onToggleArchived={onToggleArchived} />
    </div>
  );
}

export default NotesList;