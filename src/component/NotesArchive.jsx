import React from "react";
import NotesCardList from "./NotesCardList";

function NotesArchive({notes, onDelete}) {
  return (
    <div className="notes-archive">
      <p className="title-section">Arsip</p>
      <NotesCardList notes={notes} buttonText="Pindahkan" onDelete={onDelete}/>
    </div>
  )
}

export default NotesArchive