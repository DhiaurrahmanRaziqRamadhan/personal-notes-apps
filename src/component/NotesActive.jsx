import React from "react";
import NotesCardList from "./NotesCardList";

function NotesActive({notes, onDelete}){
  return (
    <div className="notes-active">
      <p className="title-section">Catatan Aktif</p>
      <NotesCardList notes={notes} buttonText="Arsipkan" onDelete={onDelete}/>
    </div>
  )
}

export default NotesActive