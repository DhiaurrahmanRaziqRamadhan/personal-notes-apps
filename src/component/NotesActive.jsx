import React from "react";
import NotesCardList from "./NotesCardList";

function NotesActive({notes, onDelete, onToggleArchived}){
  return (
    <div className="notes-active">
      <p className="title-section">Catatan Aktif</p>
      <NotesCardList notes={notes} buttonText="Arsipkan" onDelete={onDelete} onToggleArchived={onToggleArchived}/>
    </div>
  )
}

export default NotesActive