import React from "react";
import NotesCardList from "./NotesCardList";

function NotesArchive({notes, onDelete, onToggleArchived}) {
  return (
    <div className="notes-archive">
      <p className="title-section">Arsip</p>
      <NotesCardList notes={notes} buttonText="Pindahkan" onDelete={onDelete} onToggleArchived={onToggleArchived}/>
    </div>
  )
}

export default NotesArchive