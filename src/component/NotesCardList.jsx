import React from "react";
import NotesCards from "./NotesCards";

function NotesCardList({notes, buttonText, onDelete, onToggleArchived}) {
  if (notes.length === 0) {
    return (
      <div className="notes-card-list-empty">
        <p>Tidak ada Catatan</p>
      </div>
    )
  } else {
    return (
      <div className="notes-card-list">
      {
        notes.map((note) => (
          <NotesCards
            {...note}
            key={note.id}
            buttonText={buttonText}
            onDelete={onDelete}
            onToggleArchived={onToggleArchived}
          />
        ))
      }
    </div>
    )
  }
}

export default NotesCardList;