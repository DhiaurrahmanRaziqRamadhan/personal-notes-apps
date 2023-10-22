import React from "react";
import NotesActive from "./NotesActive";
import NotesArchive from "./NotesArchive";

function NotesList({notes, onDelete}){
  if (!notes.archived) {
    return (
      <div className="notes-list">
        <NotesActive notes={notes} onDelete={onDelete}/>
      </div>
    )
  }else {
    return (
      <div className="notes-list">
        <NotesArchive notes={notes} onDelete={onDelete}/>
      </div>
    )
  }
}

export default NotesList;